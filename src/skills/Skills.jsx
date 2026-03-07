import React ,{useContext} from "react";
import { SkillsContext } from "./Skillset";
import css from "../image/css.jpg";
import html from"../image/html.jpeg";
import javascript from "../image/js.png";
import react from "../image/jsx.png";
import figma from "../image/FIGMA.png";
import c1 from "../image/c++.png";
import c2 from "../image/c.png";
import django from "../image/django-icon.svg";
import python from "../image/python.jpg";
import canva from "../image/canva.jpg";
import sqlite3 from "../image/sqlite3.png";
import java from "../image/java.png";
import antigravity from "../image/antigravity.jpg";
import replit from "../image/replit.png";
import idx from "../image/project IDX.jpg";
import emergent from "../image/emergent.jpg";
import lovable from "../image/lovable.jpg";
import bolt from "../image/bolt.jpg";
import firebase from "../image/firebase.png";
import hackerrank from "../image/hackerrankering.png";
const Skills = () => {
    const { skills } = useContext(SkillsContext);
    return (
        <>
            <h1>Skills</h1><hr style={{ "width": "400px" }} /><br />
            <h3 className="skilltitle">Hacker Ranking</h3> <hr className="hr" /><br />
            <div className="skillset">
                <div>
                    <img src={hackerrank} alt="Hacker Ranking" />
                    <h6><a href="https://www.hackerrank.com/profile/ghariprasath1024" target="_blank" rel="noopener noreferrer">Hacker Ranking</a></h6>
                </div>
            </div>
            <h3 className="skilltitle">Main Languages</h3> <hr className="hr" /><br />
            <div className="skillset">
                <div>
                    <img src={html} alt="Python" />
                    <h6>{skills[1]}</h6>
                </div>
                <div>
                    <img src={css} alt="JavaScript" />
                    <h6>{skills[2]}</h6>
                </div>
                <div>
                    <img src={javascript} alt="JavaScript" />
                    <h6>{skills[3]}</h6>
                </div>
                <div>
                    <img src={react} alt="React" />
                    <h6>{skills[4]}</h6>
                </div>
                <div>
                    <img src={python} alt="Python" />
                    <h6>{skills[5]}</h6>
                </div>
                <div>
                    <img src={django} alt="Django" />
                    <h6>{skills[6]}</h6>
                </div>
            </div>
            <h3 className="skilltitle">Touch of Languages</h3> <hr className="hr" /><br />
            <div className="skillset">
                <div>
                    <img src={java} alt="Java" />
                    <h6>{skills[7]}</h6>
                </div>
                <div>
                    <img src={c2} alt="C" />
                    <h6>{skills[8]}</h6>
                </div>
                <div>
                    <img src={c1} alt="C++" />
                    <h6>{skills[9]}</h6>
                </div>
                <div>
                    <img src={sqlite3} alt="Sqlite3" />
                    <h6>{skills[10]}</h6>
                </div>
            </div>
            <h3 className="skilltitle">Designing tools</h3> <hr className="hr" /><br />
            <div className="skillset">
                <div>
                    <img src={figma} alt="Figma" />
                    <h6>{skills[11]}</h6>
                </div>
                <div>
                    <img src={canva} alt="Canva" />
                    <h6>{skills[12]}</h6>
                </div>
            </div>
            <h3 className="skilltitle">Simple project I do it</h3> <hr className="hr" /><br />
            <div className="skillset1">
                <div>
                    <h3>Weather-Application</h3>
                    <a href="https://ghariprasath1024.github.io/Weather-Application/">View the Project</a>
                </div>
                <div>
                    <h3>Todo-Application</h3>
                    <a href="https://takeabook.netlify.app/">View the Project</a>
                </div>
                <div>
                    <h3>HtmlAndCssProject</h3>
                    <a href="https://ghariprasath1024.github.io/HtmlAndCssProject/">View the Project</a>
                </div>
                <div>
                    <h3>My first Portfolio</h3>
                    <a href="https://ghariprasath1024.github.io/my-first-portfolio/">View the Project</a>
                </div>
            </div>
            <h3 className="skilltitle">Ai Tools</h3> <hr className="hr" /><br />
            <div className="skillset">
                <div>
                    <img src={bolt} alt="PHP" />
                    <h6>bolt.New</h6>
                </div>
                <div>
                    <img src={lovable} alt="PHP" />
                    <h6>Lovable</h6>
                </div>
                <div>
                    <img src={antigravity} alt="PHP" />
                    <h6>Antigravity</h6>
                </div>
                <div>
                    <img src={replit} alt="PHP" />
                    <h6>Replit</h6>
                </div>
                <div>
                    <img src={idx} alt="PHP" />   
                    <h6>Project IDX</h6>
                </div>
                <div>
                    <img src={firebase} alt="PHP" />   
                    <h6>FireBase</h6>
                </div>
                <div>
                    <img src={emergent} alt="PHP" />
                    <h6>Emergent</h6>
                </div>
            </div>
        </>
    )
}
export default Skills;