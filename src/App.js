import styled from "styled-components"
import pic from "./sajal2.jpg";
import "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
function App() {
  return (
    <Content>
      <SocialInfo>
        <Section>
          <ProfilePic src = {pic} />
          <h1>SAJAL SINGHAL</h1> 
        </Section>
        <SeperatorLine />
        <Section>
            <a href="https://github.com/SSReal"><GitHubIcon style = {{fontSize: "3.5rem"}}/></a>
            <a href="https://linkedin.com/in/sajalsinghal1"><LinkedInIcon style = {{fontSize: "3.5rem"}}/></a>
            <a href="mailto:sajal.singhal1@gmail.com"><EmailIcon style = {{fontSize: "3.5rem"}}/></a>
        </Section>
      </SocialInfo>
      <Projects />
      <Skills />
      <Experience />
    </Content>
  );
}

const Content = styled.div`
  background-color: #070a14;
  color: whitesmoke;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Section = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 30vh;
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
`;

const ProfilePic = styled.img`
  height: 25vh;
  width: 25vh;
  border-radius: 50%;
`;

const Projects = styled.div``;
const Skills = styled.div``;
const Experience = styled.div``;
export default App;
