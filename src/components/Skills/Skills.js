import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import './Skills.css'
import Slider from "react-slick";
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';
import Carousel from 'react-elastic-carousel';
const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
  ];
  
function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                   

                    <Carousel breakPoints={breakPoints}>
                        {skillsData.map((skill, id) => (
                            <div className="skill-slider" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Carousel>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills
