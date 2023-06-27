import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #000;
    padding: 20px;
    color: #fff;
`;

const Logo = styled.img`
    height: 60px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo
                src="path_to_your_star_wars_logo_image"
                alt="Star Wars Logo"
            />
        </HeaderContainer>
    );
};

export default Header;
