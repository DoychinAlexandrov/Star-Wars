import styled from "styled-components";

const MainSectionContainer = styled.section`
    background-color: #000;
    padding: 40px;
    color: #fff;
`;

const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 36px;
    margin: 0;
`;

const Description = styled.p`
    font-size: 18px;
`;

const MainSection = () => {
    return (
        <MainSectionContainer>
            <Content>
                <Title>About Star Wars</Title>
                <Description>
                    Star Wars is an American epic space opera franchise created
                    by George Lucas. The franchise began with the eponymous 1977
                    film and quickly became a worldwide pop-culture phenomenon.
                </Description>
            </Content>
        </MainSectionContainer>
    );
};

export default MainSection;
