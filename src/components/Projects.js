import ProjectInfo from "./ProjectInfo"
import styled from "styled-components"

const projects = [
    {
        id: 3,
        name: "Chat-App-Backend",
        date: "March 2022",
        description: [
            "Support for users, pages, and views",
            "Each user can have several pages",
            "Each page can have several views",
            "Each view can have a separate password, and can be abstracted by any application to include data"
        ],
        githubLink: "https://github.com/SSReal/chat-app-backend",
        liveLink: null
    },
    {
        id: 0,
        name: "Me-Site",
        date: "May-June 2021",
        description: [
            "Microblogging Platform created using MERN stack",
            "Users can log in with Google or Email and create profile",
            "Following-Follower system",
            "Users can make posts, and put comments on posts"
        ],
        githubLink: "https://github.com/SSReal/me-site",
        liveLink: null
    },
    {
        id: 1,
        name: "Ano-Note",
        date: "April-May 2021",
        description: [
            "Note-taking social network",
            "Users can talk to others in notes, or just use the notes for remembering stuff",
            "Backend implemented in Mongodb and Express (MERN stack)",
            "Option to delete, edit and create notes"
        ],
        githubLink: "https://github.com/SSReal/ano-note",
        liveLink: "https://ano-note.herokuapp.com/"
    },
    {
        id: 2,
        name: "Calctech",
        date: "March-April 2021",
        description: [
            "Support for both integer and decimal calculations",
            "Numbers with empty decimal places are truncated automatically"
        ],
        githubLink: "https://github.com/SSReal/calctech-ss",
        liveLink: "https://calctech-ss.herokuapp.com/"
    }
];


export default function Projects() {
    return(
        <ProjectDisplay>
            <p className = {"grey-subtext"}> .. (scroll) ..</p>
            {
                projects.map((project) => <ProjectInfo key={project.id} info = {project}/>)
            } 
        </ProjectDisplay>
    )
}

const ProjectDisplay = styled.div`
    position: relative;
    display: flex;
    flex: 1.5;
    flex-direction: column;
    overflow: auto;
    max-height: 45vh;
    max-width: 70vw;
    flex-wrap: wrap;
    margin-left: 2vw;
    margin-right: 5vw;
`;