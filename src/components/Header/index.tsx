import React from "react";
import { Container, Logo, SearchBar } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <Logo />
            <SearchBar>
                <input placeholder="Enter username or Repository"/>
            </SearchBar>
        </Container>
    )
}

export default Header;