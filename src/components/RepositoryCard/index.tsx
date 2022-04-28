import React from "react";
import { Link } from "react-router-dom";

import { Container, TopSide, BottomSide, RepoIcon, StarIcon, ForkIcon } from './styles';

interface Props {
    username: string;
    reponame: string;
    description?: string;
    language?: string;
    stars: number;
    forks: number;
}

const RepositoryCard: React.FC<Props> = (props: Props) => {
    
    const languageClass = props.language ? props.language.toLowerCase() : 'other';

    return (
        <Container>
            <TopSide>
                <header>
                    <RepoIcon />
                    <Link to={`/${props.username}/${props.reponame}`}>{props.reponame}</Link>
                </header>
                <p>{props.description}</p>
            </TopSide>
            <BottomSide>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`}></div>
                        <span>{props.language}</span>
                    </li>
                    <li>
                        <StarIcon />
                        <span>{props.stars}</span>
                    </li>
                    <li>
                        <ForkIcon />
                        <span>{props.forks}</span>
                    </li>
                </ul>
            </BottomSide>
        </Container>
    );
}

export default RepositoryCard;