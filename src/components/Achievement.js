import {useState} from "react";
import styled from "styled-components";


export default function Achievement(props) {
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
        <AchSection>
            <h1 onClick = {pressToggle}>{props.info.rank}<sup><span className="very-small">th</span></sup></h1>
            {
                (toggle) && 
                <HiddenInfo>
                    {props.info.description}
                </HiddenInfo>
            }
        </AchSection>
    )
}

const AchSection = styled.div`
min-width: 175px;
margin: 10px;
margin-right: 15vw;
font-size: 1.3rem;
line-height: 0.9;
font-weight: 100;
>h1 {
    font-size:4.5rem;
}
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