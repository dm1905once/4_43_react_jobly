import React from "react";
import "./JobCard.css";
import { Card, CardHeader, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import UserContext from "./UserContext";
import JoblyApi from "./JoblyApi";


function JobCard({job}) {
  const { appUser } = React.useContext(UserContext);
  const [ jobState, setJobState ] = React.useState(job.state);

  const applyButton = <ListGroupItem action color="primary" onClick={() => apply(appUser.username, job.id)}>Apply</ListGroupItem>;
  const appliedMsg  = <ListGroupItem color="light">Applied</ListGroupItem>;

  async function apply(username, jobId) {
      try{
        const newState = await JoblyApi.applyJob(username, jobId);
        if (newState === "applied") setJobState("applied");
      } catch(e){
        console.log(e);
      }
    }

  return (
    <div>
        <Card style={{ width: '24rem' }}>
            <CardBody>
                <CardHeader>{job.title}</CardHeader>
                <CardTitle className="my-2 text-muted">{job.company_handle}</CardTitle>
                <ListGroup >
                    <ListGroupItem><b>Salary: </b>{job.salary}</ListGroupItem>
                    <ListGroupItem><b>Equity: </b>{job.equity}</ListGroupItem>
                    {(jobState === "applied")? appliedMsg : applyButton }
                </ListGroup> 
            </CardBody> 
        </Card>
    </div>
  );
}

export default JobCard;
