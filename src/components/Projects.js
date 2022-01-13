import ProjectInfo from "./ProjectInfo"

const projects = [
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

const projectStyle = {
    maxWidth: "55vw"
}

export default function Projects() {
    return(
        <div style = {projectStyle}>
            {
                projects.map((project) => <ProjectInfo key={project.id} info = {project}/>)
            }
        </div>
    )
}