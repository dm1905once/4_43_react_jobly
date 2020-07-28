import React from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
// import "./Company.css";
import { Card, CardHeader, CardText, CardGroup } from "reactstrap";


function Company() {
  const { handle } = useParams();
  const [company, setCompany] = React.useState();

  React.useEffect(() => {
    // Get company details
    async function getCompanyDetails(){
      let company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompanyDetails();

  }, [handle]);

  return (
    <div>
      <Card>
        <CardHeader>{(company)? company.name : "Retrieving..."}</CardHeader>
        <CardText>{(company)? company.description : "Retrieving..."}</CardText>
      </Card>
      <p>Jobs posted by this company: </p>
      <CardGroup>
        {(company)? company.jobs.map(job => <JobCard job={job} key={job.id}/>): "Finding jobs..."}
      </CardGroup>
    </div>
  );
}

export default Company;
