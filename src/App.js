import styled from "styled-components"
import pic from "./sajal2.jpg";
import "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import { useState } from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <Content>
      <SocialInfo>
        <Section className={"fixed-banner"}>
          <ProfilePic src = {pic} />
          <h1>SAJAL SINGHAL</h1> 
          {(tab === 0) && 
          <div style = {{display: "flex", fontSize:"1.5rem"}}>
            <TabChangeButton onClick = {() => {setTab(1)}}>Projects</TabChangeButton> |
            <TabChangeButton onClick = {() => {setTab(2)}}>Skills</TabChangeButton> |
            <TabChangeButton onClick = {() => {setTab(3)}}>Experience</TabChangeButton>
          </div>
          }
          {(tab !== 0) && <TabChangeButton onClick = {() => {setTab(0)}}>Hide Tab</TabChangeButton>}
        </Section>
        <SeperatorLine />
        <Section>
            <a href="https://github.com/SSReal"><GitHubIcon style = {iconStyle}/></a>
            <a href="https://linkedin.com/in/sajalsinghal1"><LinkedInIcon style = {iconStyle}/></a>
            <a href="mailto:sajal.singhal1@gmail.com"><EmailIcon style = {iconStyle}/></a>
        </Section>
      </SocialInfo>
      {(tab === 1)&&<Projects />}
      {(tab === 2)&&<Skills />}
      {(tab === 3)&&<Experience />}
    </Content>
  );
}

const iconStyle = {
  fontSize: "3rem"
}

const Content = styled.div`
  background-color: #070a14;
  color: whitesmoke;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  min-height: max-content;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  margin: 10px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 30vh;
  text-align: center;

  >a {
    color: inherit;
    text-decoration: none;
  }
`;

const SeperatorLine = styled.div`
  border-left: 2px solid lightgrey;
  height: 40vh;
  margin-left: 3vw;
  margin-right: 3vw;
`;

const SocialInfo = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  margin-left: 5vw;
`;

const TabChangeButton = styled.button`
  margin: 5px;
  border: none;
  background-color: inherit;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
`;

const ProfilePic = styled.img`
  height: 25vw;
  width: 25vw;
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
`;

// const Skills = styled.div`
//   background-color: red;
//   width: 100px;
//   height: 100%;
// `;

const Experience = styled.div`
  background-color: blue;
  width: 100px;
  height: 100%;
`;
export default App;
