import React from 'react';
import Agro from "../main/Agro/agro";
import Team from "../main/Team/team";
import Our from "../main/Our/our";
import Unique from "../main/Unique/unique";


const AboutUs = () => {
    return (
        <div className="about">
            <Agro/>
            <Team/>
            <Our/>
            <Unique/>
        </div>
    );
};

export default AboutUs;