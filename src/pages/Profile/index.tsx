import React from "react";

import { Container, Main, LeftSide, RightSide, Repositories } from "./styles";
import ProfileData from "../../components/ProfileData";
import RepositoryCard from "../../components/RepositoryCard";

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'AbnerLimaa'}
                        name={'Abner Lima'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/16565789?v=4'}
                        followers={100}
                        following={10}
                        company={'Virtualsoft'}
                        location={'Fortaleza, Brazil'}
                        email={'abner.lima27@outlook.com'}
                        blog={'https://www.linkedin.com/in/abner-lima-64262b114/'}/>
                </LeftSide>
                <RightSide>
                    <Repositories>
                        <h2>Random repos</h2>
                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepositoryCard
                                    key={n}
                                    username={'AbnerLimaa'} 
                                    reponame={'github-ui-clone'}
                                    description={'Repositorio de clone do github'}
                                    language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                                    stars={10}
                                    forks={5}
                                />
                            ))}
                        </div>
                    </Repositories>
                </RightSide>
            </Main>
        </Container>
    );
}

export default Profile;