import {useState} from "react";
import styled from "styled-components"

export default function ProjectInfo(props) {
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
        <Project>
            <h3 onClick = {pressToggle}>{"["+props.info.name+"]"}</h3>
            {
            (toggle) && 
            <HiddenInfo>
                <h4 style={{marginLeft:"10px"}}>{props.info.date}</h4>
                <hr/>
                {(props.info.githubLink) && <a href={props.info.githubLink} target = "_blank" rel="noreferrer">Github Repository</a>}
                {(props.info.githubLink && props.info.liveLink) && " | "}
                {(props.info.liveLink) && <a href={props.info.liveLink} target = "_blank" rel = "noreferrer">Live Link</a>}
                <br/>
                {
                    props.info.description.map((desc)=><p style = {{fontSize: "0.75rem", lineHeight: "1"}} key = {desc} >{desc}</p>)
                }
                <hr />
                
            </HiddenInfo>
            }
            <br/>
        </Project>
    )
}

const Project = styled.div`
    min-width: 175px;
    margin: 10px;
    margin-right: 15vw;
`;

const HiddenInfo = styled.div`
    margin-left: 10px;
    >a {
        text-decoration: none;
        color: inherit;
        font-weight: bolder;
        font-size: 0.75rem;
    }
`;