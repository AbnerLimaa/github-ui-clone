import React from "react";

import { Container } from './styles';

interface Props {
    username: string;
    reponame: string;
    description?: string;
    language?: string;
    stars: number;
    forks: number;
}

const RepositoryCard: React.FC<Props> = (props: Props) => {
    
    return (
        <></>
    );
}

export default RepositoryCard;