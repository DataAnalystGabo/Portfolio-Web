import styled from "styled-components";

export function Pill({ skill }) {
    return (
        <Container>
            <p>{skill}</p>
        </Container>
    );
}

const Container = styled.div`
    width: max-content;
    border: 1.7px solid var(--primary-color);
    background-color: var(--background-sidebar);
    border-radius: 1rem;
    p {
        padding: 0.125rem 1rem;
        margin: 0;
        color: var(--primary-color);
    }
`;
