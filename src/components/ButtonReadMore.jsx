import styled from "styled-components";
import { CgRead } from "react-icons/cg";

export function ButtonReadMore() {
    return (
        <Link className="buttonReadMore">
            <span>Explorar</span>
            <CgRead />
        </Link>
    );
}

const Link = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0;
    gap: 0.4rem;
    cursor: pointer;
    color: var(--primary-color);
    font-weight: var(--font-weight-medium);
    border-bottom: 1px solid var(--primary-color);
    svg {
        font-size: 1.4rem;
    }
    &:hover {
        opacity: 0.9;
    }
    @keyframes read {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(0);
        }
        75% {
            transform: translateY(-2px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;
