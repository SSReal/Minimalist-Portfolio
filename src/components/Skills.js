import styled from "styled-components"
import Skill from "./Skill"

const skills = [
    {
        name: "JS",
        sub: ["React.js","Node.js","Express.js","Next.js", "Redux"]
    },
    {
        name: "TS",
        sub: ["Experience working in Back-End and Front-End"]
    },
    {
        name: "C++",
        sub: ["STL", "Competitive Programming"]
    },
    {
        name: "Py",
        sub: ["Numpy","Pandas","Scikit-learn","Tensorflow","Django"]
    },
    {
        name: "Flutter",
        sub: ["Material Widgets", "Flutter Bloc"]
    }
];

export default function Skills() {
    return (
        <SkillDisplay>
            <p className = {"grey-subtext"}> .. (scroll) ..</p> 
            {
                skills.map((skill,i)=> <Skill key = {i} info = {skill} />)
            }
        </SkillDisplay>
    )
}

const SkillDisplay = styled.div`
    position: relative;
    display: flex;
    flex: 1.5;
    flex-direction: column;
    overflow-x: auto;
    max-height: 45vh;
    max-width: 70vw;
    flex-wrap: wrap;
    margin-left: 2vw;
    margin-right: 5vw;
`;

