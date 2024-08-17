import styled from "styled-components";

export function Pill({ skill, children, border, backgroundColor, color }) {
    return (
        <Container
            $border={border}
            $backgroundColor={backgroundColor}
            $color={color}
        >
            {children}
            <p>{skill}</p>
        </Container>
    );
}

const Container = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.125rem 0.8rem;
    border: ${({ $border }) =>
        $border ? $border : "1.7px solid var(--primary-color)"};
    background-color: ${({ $backgroundColor }) =>
        $backgroundColor ? $backgroundColor : "var(--background-sidebar)"};
    border-radius: 10rem;
    gap: 0.2rem;
    p {
        margin: 0;
        color: ${({ $color }) => ($color ? $color : "var(--primary-color)")};
    }
    svg {
        font-size: 1.1rem;
        color: ${({ $color }) => ($color ? $color : "var(--primary-color)")};
    }
`;
