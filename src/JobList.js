import React from "react";
// import "./JobList.css";
import { Container, CardGroup, Form, Input, Button, InputGroup, InputGroupAddon } from "reactstrap";
import JobCard from "./JobCard"
import JoblyApi from "./JoblyApi";


function JobList() {

  const [ jobs, setJobs ] = React.useState([]);
  const [ jobSearch, setJobSearch ] = React.useState(null);

  React.useEffect(()=>{
    async function getJobs(){
      const allJobs = await JoblyApi.getJobs();
      if (jobSearch === null) setJobs(allJobs);
    }
    getJobs();
  },[jobSearch]);

  React.useEffect(() =>{
    const jobSearchIds = jobs.filter(eachJob => eachJob.title.toLowerCase().includes(jobSearch))
    
    async function getJobSearch(){
      let jobSearchResults = [];
      jobSearchIds.forEach((jobId) =>
        jobSearchResults.push(JoblyApi.getJobByID(jobId.id))
      );
      Promise.all(jobSearchResults).then((jobsFound) => setJobs(jobsFound));
    }
    if (jobSearch !== null) getJobSearch();
  },[jobSearch]);

  function handleSearch(e){
    e.preventDefault();
    setJobSearch(e.target.searchByTitle.value.toLowerCase());
    e.target.searchByTitle.value = "";
  }

  function handleReset(){
    setJobs([]);
    setJobSearch(null);
  }

  return (
    <div>
     <h1>Jobs:</h1>
      <Container>
        <Form onSubmit={handleSearch}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button variant="success">Search by Job Title</Button>
            </InputGroupAddon>
            <Input type="text" name="searchByTitle" id="searchByTitle"/>
            <InputGroupAddon addonType="append">
              <Button variant="secondary" onClick={handleReset}>Reset</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>
     <CardGroup>
      {jobs.map(job => <JobCard job={job} />)}
     </CardGroup>
    </div>
  );
}

export default JobList;
