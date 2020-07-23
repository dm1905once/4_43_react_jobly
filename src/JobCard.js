import React from "react";
import "./JobCard.css";
import { CardGroup, Card, CardHeader, CardBody, CardTitle, Button, CardSubtitle, CardLink, ListGroup, ListGroupItem } from "reactstrap";

function alertClicked() {
    alert('You clicked the third ListGroupItem');
  }

function JobCard({job}) {
  return (
    <div>
        <Card style={{ width: '24rem' }}>
            <CardBody>
                <CardHeader>{job.title}</CardHeader>
                <CardTitle className="my-2 text-muted">{job.company_handle}</CardTitle>
                <ListGroup >
                    <ListGroupItem><b>Salary: </b>4,500</ListGroupItem>
                    <ListGroupItem><b>Equity: </b>{job.equity}</ListGroupItem>
                    <ListGroupItem action variant="primary" onClick={alertClicked}>Apply</ListGroupItem>
                </ListGroup> 
            </CardBody> 
        </Card>
    </div>
  );
}

export default JobCard;
