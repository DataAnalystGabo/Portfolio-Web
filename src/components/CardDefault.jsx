import styled from "styled-components";

export function CardDefault({ title, subTitle, body, children }) {
    return (
        <Container>
            {title && <Title>{title}</Title>}
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
            {body && <Body>{body}</Body>}
            {children}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    margin: 0;
    padding: 0.5rem 0;
    font-weight: var(--font-weight-medium);
    color: var(--primary-text);
`;

const SubTitle = styled.p`
    margin: 0;
    padding: 0.5rem 0;
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-tinny);
    color: var(--secondary-text);
`;

const Body = styled.p`
    margin: 0;
    padding: 0.5rem 0;
    color: var(--secondary-text);
`;
