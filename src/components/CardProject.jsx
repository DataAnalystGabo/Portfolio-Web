import styled from "styled-components";
import { ButtonReadMore } from "./ButtonReadMore";

export function CardProject({ title, children, body, bannerImage }) {
    return (
        <Container>
            <Banner>
                <img
                    src={bannerImage}
                    alt="Imagen representativa de la línea 144"
                ></img>
            </Banner>
            <Header>
                <h3>{title}</h3>
                <Pills>{children}</Pills>
            </Header>
            <Body>
                <p>{body}</p>
            </Body>
            <ButtonReadMore></ButtonReadMore>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    &:hover .buttonReadMore:not(:hover) svg {
        animation: read 0.5s ease-in-out infinite;
    }
`;

const Banner = styled.picture`
    width: 100%;
    height: auto;
    background-color: var(--disabled-text);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Pills = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Body = styled.div`
    p {
        padding: 0;
        margin: 0;
        color: var(--secondary-text);
    }
`;
