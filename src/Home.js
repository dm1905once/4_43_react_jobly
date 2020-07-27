import React from 'react';
import homeBackgroundPic from "./imgs/free-to-use-sounds-kOuCX7fh50U-unsplash.jpg";
import './Home.css';

function Home(){
    return(
        <div>
            <h1>Welcome to Jobly</h1>
            <div className="Home-ImgContainer">
                <img src={homeBackgroundPic} alt="Home page background"/>
                <div className="Home-ImgCredit">Photo by free-to-use-sounds on Unsplash</div>
            </div>
        </div>
    );
}

export default Home;