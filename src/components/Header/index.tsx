import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import { ThemeName } from "../../styles/Themes";
import { Container, Logo, SearchBar } from "./styles";

interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = (props: Props) => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        navigate('/' + search.toLowerCase().trim());
    }

    function toggleTheme() {
        props.setThemeName(props.themeName === 'light' ? 'dark' : 'light');
    }

    return (
        <Container>
            <Logo onClick={toggleTheme}/>
            <SearchBar onSubmit={handleSubmit}>
                <input 
                    placeholder="Enter username or Repository"
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}/>
            </SearchBar>
        </Container>
    )
}

export default Header;