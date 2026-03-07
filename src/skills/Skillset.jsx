import React, { useState } from "react";
import { createContext } from "react";
import Skills from "./Skills";
export const SkillsContext = createContext(null);
const SkillSet = () => {
    let [skills] = useState(["Hacker Ranking", "HTML", "CSS", "JavaScript", "Reactjs", "Python", "Django", "Java", "C", "C++", "Sqlite3", "Figma", "Canva"]);
    return (
        <>
            <SkillsContext.Provider value={{skills }}>
                <div>
                    <Skills />
                </div>
            </SkillsContext.Provider>

        </>
    )
}
export default SkillSet;