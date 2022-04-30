import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import { Container, Logo, SearchBar } from "./styles";

const Header: React.FC = () => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        navigate('/' + search.toLowerCase().trim());
    }

    return (
        <Container>
            <Logo />
            <SearchBar>
                <input 
                    placeholder="Enter username or Repository"
                    value={search}
                    onChange={e => setSearch(e.currentTarget.value)}/>
            </SearchBar>
        </Container>
    )
}

export default Header;