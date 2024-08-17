import styled from "styled-components";
import bannerLinea144 from "../assets/bannerLinea144.webp";

export function CardProject({ title, children, body }) {
    return (
        <Container>
            <Banner>
                <img
                    src={bannerLinea144}
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
        </Container>
    );
}

const Container = styled.div`
    width: 30.875rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Banner = styled.picture`
    width: 30.875rem;
    height: 15.625rem;
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
