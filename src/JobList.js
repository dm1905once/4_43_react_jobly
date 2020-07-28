import React from "react";
// import "./JobList.css";
import { Container, CardGroup, Form, Input, Button, InputGroup, InputGroupAddon } from "reactstrap";
import JobCard from "./JobCard"
import JoblyApi from "./JoblyApi";


function JobList() {

  const [ jobs, setJobs ] = React.useState([]);
  const [ jobSearch, setJobSearch ] = React.useState(null);
  // const [ authError, setAuthError ] = React.useState("");

  React.useEffect(()=>{
    async function getJobs(){
      const allJobs = await JoblyApi.getJobs();
      if (jobSearch === null) setJobs(allJobs);
    }
    getJobs();
  },[jobSearch]);

  React.useEffect(() =>{
    const jobSearchIds = jobs.filter(eachJob => eachJob.title.toLowerCase().includes(jobSearch))
    
    try {
      async function getJobSearch(){
        let jobSearchResults = [];
        jobSearchIds.forEach((jobId) =>
          jobSearchResults.push(JoblyApi.getJobByID(jobId.id))
        );
        Promise.all(jobSearchResults).then((jobsFound) => setJobs(jobsFound));
      }
      if (jobSearch !== null) getJobSearch();
    } catch(e) {
      console.log(e);
    }
  },[jobSearch, jobs]);

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
     {/* <p>{(authError !== "")? authError: ""}</p> */}
      <Container>
        <Form onSubmit={handleSearch}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button color="success">Search by Job Title</Button>
            </InputGroupAddon>
            <Input type="text" name="searchByTitle" id="searchByTitle"/>
            <InputGroupAddon addonType="append">
              <Button  onClick={handleReset}>Reset</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>
     <CardGroup>
      {jobs.map(job => <JobCard job={job} key={job.id}/>)}
     </CardGroup>
    </div>
  );
}

export default JobList;
