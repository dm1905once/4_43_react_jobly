import React from "react";
// import "./CompanyList.css";
import { Container, CardGroup, Form, Input, Button, InputGroup, InputGroupAddon } from "reactstrap";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";


function CompanyList() {
  const [companies, setCompanies] = React.useState([]);
  const [companySearch, setcompanySearch] = React.useState(null);

  React.useEffect(() =>{
      async function getCompanyList(){
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
      }
      if (companySearch === null) getCompanyList();
  },[companySearch]);

  // React.useEffect(() =>{
  //   async function getCompanySearch(){
  //     let company = await JoblyApi.getCompany(companySearch);
  //     setCompanies([company]);
  //   }
  //   if (companySearch !== null) getCompanySearch();
  // },[companySearch]);

  React.useEffect(() =>{
    const companySearchHandles = companies.filter(eachCompany => eachCompany.handle.includes(companySearch));

    async function getCompanySearch(){
      let companySearchResults = [];
      companySearchHandles.forEach((companyByHandle) =>
        companySearchResults.push(JoblyApi.getCompany(companyByHandle.handle))
      )
      Promise.all(companySearchResults).then((companiesFound)=>setCompanies(companiesFound))
    }
    if (companySearch !== null) getCompanySearch();
  },[companySearch]);

  function handleSearch(e){
    e.preventDefault();
    setcompanySearch(e.target.searchByHandle.value.toLowerCase());
    e.target.searchByHandle.value = "";
  }

  function handleReset(){
    setCompanies([]);
    setcompanySearch(null);
  }


  return (
    <div>
        <h1>Company List</h1>
        <Container>
          <Form onSubmit={handleSearch}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button variant="success">Search by Company Handle</Button>
              </InputGroupAddon>
              <Input type="text" name="searchByHandle" id="searchByHandle"/>
              <InputGroupAddon addonType="append">
                <Button variant="secondary" onClick={handleReset}>Reset</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </Container>
        <CardGroup>
          {companies.map(company => <CompanyCard company={company} key={company.handle}/>)}
          {/* { (companies.length > 0) ? 
            companies.map(company => <CompanyCard company={company} key={company.handle}/>)
            : <h3>Retrieving...</h3>} */}
        </CardGroup>
        <span>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
    </div>
  );
}

export default CompanyList;
