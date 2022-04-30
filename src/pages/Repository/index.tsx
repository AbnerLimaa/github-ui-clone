import React from "react";
import { Link } from "react-router-dom";
import { Container, Breadcrumb, Stats, LinkButton, RepoIcon, StarIcon, ForkIcon, GitHubIcon  } from "./styles";

const Repository: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className={'username'} to={'/AbnerLimaa'}>
                    AbnerLimaa
                </Link>
                <span>/</span>
                <Link className={'reponame'} to={'/AbnerLimaa/github-ui-clone'} >
                    github-ui-clone
                </Link>
            </Breadcrumb>
            <p>Contains GitHub UI Clone</p>
            <Stats>
                <li>
                    <StarIcon/>
                    <b>10</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon/>
                    <b>5</b>
                    <span>forks</span>
                </li>
            </Stats>
            <LinkButton href={'https://github.com/AbnerLimaa'}>
                <GitHubIcon/>
                <span>View on GitHub</span>
            </LinkButton>
        </Container>
    );
}

export default Repository;