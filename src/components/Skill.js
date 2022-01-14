import {useState} from "react"
import styled from "styled-components"

export default function Skill(props) {
    const [toggle, setToggle] = useState(true);
    const pressToggle = () => {
        if(toggle) {
            setToggle(false);
        }
        else {
            setToggle(true);
        }
    }
    return (
        <SkillSection>
            <h1 onClick = {pressToggle}>{"[" + props.info.name + "]"}</h1>
            {
            (toggle) && 
            <HiddenInfo>
                {
                    props.info.sub.map((subSkill, i) => <p key = {i}>{subSkill}</p>)
                }
            </HiddenInfo>
            }
            <br/>
        </SkillSection>
    )
}

const SkillSection = styled.div`
    min-width: 175px;
    margin: 10px;
    margin-right: 15vw;
    font-size: 2.5rem;
    line-height: 0.7;
    font-weight: 100;
`;

const HiddenInfo = styled.div`
    margin-left: 10px;
    display:flex;
    flex-direction: row;
    max-width: 350px;
    overflow-y: auto;
    flex-wrap: wrap;
    >a {
        text-decoration: none;
        color: inherit;
        font-weight: bolder;
        font-size: 0.75rem;
    }
    >p {
        margin: 5px;
        margin-right: 15px;
    }
`;