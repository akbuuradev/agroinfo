import React from 'react';
import team from './../../../images/team.png'
import team1 from  './../../../images/team1.png'
import team2 from './../../../images/team2.png'
import './team.scss'

const Team = () => {
    return (
        <div id="team">
            <div className="container">
                <div className="team">
                <div className="team--right">
                    <p>Мы - команда энтузиастов, создавших агро платформу с легким и эффективным доступом к сельскохозяйственным ресурсам. </p>
                </div>
                    <div className="team--left">
                        <img className="team--left__images" src={team1} alt=""/>
                        <img className="team--left__img" src={team} alt=""/>
                        <img className="team--left__image" src={team2} alt=""/>
                        <div className="team--left__block">
                            <p>
                                Наша история началась в 20XX году, когда мы решили объединить нашу экспертизу в области сельского хозяйства и технологий, чтобы улучшить жизнь фермеров и помочь им достичь большей урожайности.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;