import React from "react";
import "./JobList.css";
// import { Navbar, Nav, NavItem } from "reactstrap";
import JobCard from "./JobCard"
import { CardGroup } from "reactstrap";

const jobs = [
  {
    "id": 9,
    "title": "Psychologist, occupational",
    "company_handle": "robbins-marsh-and-martin",
    "salary": 190000,
    "equity": 0.14,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  },
  {
    "id": 10,
    "title": "Leisure centre manager",
    "company_handle": "edwards-lee-and-reese",
    "salary": 135000,
    "equity": 0.02,
    "state": null
  }
];

function JobList() {
  return (
    <div>
     <h1>Jobs:</h1>
     <CardGroup>
      {jobs.map(job => <JobCard job={job} />)}
     </CardGroup>
    </div>
  );
}

export default JobList;
