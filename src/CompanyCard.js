import React from "react";
import "./CompanyCard.css";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import CompanyLogo from "./imgs/office-blocks.png"
import { Link } from "react-router-dom";

const handleImgNotFound = (e) =>{
  e.target.onerror = null; 
  e.target.src=CompanyLogo;
}

function CompanyCard({company}) {
  return (
    <div>
      <Link className="CompanyCard-CardLink" to={`/companies/${company.handle}`} >
        <Card style={{ width: '18rem' }} >
            <CardBody>
              <CardImg  src={(company.logo_url !== '')? company.logo_url : CompanyLogo } 
                        alt="Company logo"
                        onError={handleImgNotFound}/>
                <CardTitle className="CompanyCard-CardTitle">{company.name}</CardTitle>
                <CardText>{company.description}</CardText>
            </CardBody> 
        </Card>
      </Link>
    </div>
  );
}

export default CompanyCard;
