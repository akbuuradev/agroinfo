import React from 'react';
import Agro from "../main/Agro/agro";
import Team from "../main/Team/team";
import Our from "../main/Our/our";


const AboutUs = () => {
    return (
        <div className="about">
            <Agro/>
            <Team/>
            <Our/>
        </div>
    );
};

export default AboutUs;