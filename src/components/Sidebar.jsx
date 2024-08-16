import styled from "styled-components";
import { Pill } from "./Pill";
import { CardDefault } from "./CardDefault";
import { ButtonDownload } from "./ButtonDownload";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { BsPatchCheckFill } from "react-icons/bs";

export function Sidebar() {
    return (
        <>
            <Container>
                <Header>
                    <PictureProfile></PictureProfile>
                    <DataProfile>
                        <NameProfile>
                            <h1>Gonzalo Ramirez</h1>
                            <BsPatchCheckFill />
                        </NameProfile>
                        <h2>Data Analyst en GCBA</h2>
                        <h3>Buenos Aires, Argentina</h3>
                        <IconsProfile>
                            <LinkProfile
                                href="https://github.com/DataAnalystGabo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithubAlt />
                                <span>Github</span>
                            </LinkProfile>
                            <LinkProfile
                                href="https://www.linkedin.com/in/gonzaramirez95/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                                <span>Linkedin</span>
                            </LinkProfile>
                            <LinkProfile
                                href="mailto:gonzalogabrielramirez@outlook.com.ar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiMailSendLine />
                                <span>Enviar email</span>
                            </LinkProfile>
                        </IconsProfile>
                    </DataProfile>
                </Header>
                <CardDefault
                    title="Acerca de mí"
                    body="
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when.
                "
                >
                    <ButtonDownload text="Descargar Cv" />
                </CardDefault>
                <CardDefault title="Stack de Herramientas">
                    <Pills>
                        <Pill skill={"SQL"} />
                        <Pill skill={"Power Bi"} />
                        <Pill skill={"Excel"} />
                        <Pill skill={"Python"} />
                    </Pills>
                </CardDefault>
            </Container>
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    flex: 0 0 22.5625rem;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem 2rem;
    background-color: var(--background-sidebar);
    border-right: 1px solid var(--primary-color);
    box-sizing: border-box;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1.5rem;
`;

const PictureProfile = styled.div`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 100%;
    background-color: var(--disabled-text);
`;

const DataProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    h1 {
        color: var(--secondary-color);
        line-height: 1.5rem;
    }
    h2 {
        font-weight: 400;
        color: var(--secondary-text);
    }
    h3 {
        font-size: var(--font-size-tinny);
        font-weight: var(--font-weight-normal);
        color: var(--secondary-text);
    }
`;

const NameProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    svg {
        font-size: 1.5rem;
        color: var(--verify-color);
    }
`;

const IconsProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

const LinkProfile = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    margin: 0;
    svg {
        font-size: 1.7rem;
        color: var(--secondary-text);
        transition: all 0.2s ease-in-out;
    }
    svg:hover {
        opacity: 0.8;
    }
    span {
        width: max-content;
        position: absolute;
        top: 1.5rem;
        left: 0.2rem;
        font-size: var(--font-size-tinny);
        font-weight: var(--font-weight-normal);
        background-color: var(--secondary-text);
        padding: 0.3125rem 0.5rem;
        border-radius: 0.3125rem;
        box-shadow: 0 0.625rem 0.625rem rgba(0, 0, 0, 0.2);
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s cubic-bezier(0.58, -0.45, 0.255, 1.45);
        color: var(--background);
    }
    span::before {
        height: 0.5rem;
        width: 0.5rem;
        position: absolute;
        content: "";
        background-color: var(--secondary-text);
        top: -3px;
        left: 20%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.2s cubic-bezier(0.58, -0.45, 0.255, 1.45);
    }
    &:hover {
        span {
            top: 2.5rem;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }
    }
`;

const Pills = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 0;
    font-weight: var(--font-weight-normal);
    gap: 0.7rem;
`;