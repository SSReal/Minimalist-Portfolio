import styled from "styled-components"
import Achievement from "./Achievement"

const achs = [
    {
        rank: 29,
        description: "All India Rank in Amazon HackOn 2022 Second Round ( Team semicolon;) )",
    },
    {
        rank: 3427,
        description: "Global Rank in Google Hash Code '22, with a total score of over 1 Million"
    },
    {
        rank: 1145,
        description: "AIR and 3945 Global Rank in Google Hash Code '21, with a total score of over 7.9 Million"
    },
    {
        rank: 3782,
        description: "Global rank and achieved 1536 rating in Leetcode Weekly Contest 251"
    },
    {
        rank: 2671,
        description: "Global rank and achieved 1566 rating in Codechef June Challenge '21"
    },
    {
        rank: 1059,
        description: "Global rank out of over 1 Lakh participants in Code Gladiators '21"
    }
];


export default function Achievements(props) {
    return (
        <AchDisplay>
            <p className = {"grey-subtext"}> .. (scroll) ..</p>
            {
                achs.map((ach,i) => <Achievement key = {i} info = {ach} />)
            }
        </AchDisplay>
    )
}

const AchDisplay = styled.div`
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