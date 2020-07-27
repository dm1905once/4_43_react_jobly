import React from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
// import "./Company.css";
import { Card, CardHeader, CardText } from "reactstrap";


function Company() {
  const { handle } = useParams();
  const [company, setCompany] = React.useState();
  const [jobs, setJobs] = React.useState();

  React.useEffect(() => {
    async function getCompanyDetails(){
      let company = await JoblyApi.getCompany(handle);
      // let jobs = await JoblyApi.getCompany(handle);
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
      <h4>Jobs...</h4>
      <p>...to be added</p>
       {/* Job  list to be added here*/}
    </div>
  );
}

export default Company;
