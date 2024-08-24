import styled from "styled-components";

export function ButtonDownload({ text = "This is button" }) {
  return (
    <>
      <Button>{text}</Button>
    </>
  );
}

const Button = styled.button`
  width: max-content;
  padding: 0.8rem 2rem;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background-color: var(--background-sidebar);
  box-shadow: 0.25rem 0.25rem var(--secondary-text);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    background-color: var(--background-sidebar);
    box-shadow: 0.25rem 0.25rem var(--secondary-text);
  }
  &:active {
    transform: translate(0.25rem, 0.25rem);
    box-shadow: none;
  }
  @media (max-width: 950px) {
  }
`;
