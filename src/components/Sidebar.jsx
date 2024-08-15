import styled from "styled-components";
import { Pill } from "./Pill";
import { CardDefault } from "./CardDefault";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <>
            <Container>
                <Header>
                    <PictureProfile></PictureProfile>
                    <DataProfile>
                        <h1>Gonzalo Ramirez</h1>
                        <h2>Data Analyst en GCBA</h2>
                        <h3>Buenos Aires, Argentina</h3>
                        <IconsProfile>
                            <LinkProfile
                                href="https:/https://github.com/DataAnalystGabo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithubAlt />
                            </LinkProfile>
                            <LinkProfile
                                href="https://www.linkedin.com/in/gonzaramirez95/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </LinkProfile>
                            <LinkProfile
                                href="mailto:gonzalogabrielramirez@outlook.com.ar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiMailSendLine />
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
                />
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
    width: 22.5625rem;
    height: 100vh;
    max-height: 100vh;
    position: fixed;
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
        color: var(--primary-color);
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
    padding: 0;
    margin: 0;
    svg {
        font-size: 1.7rem;
        color: var(--secondary-text);
        transition: all 0.2s ease-in-out;
    }
    svg:hover {
        color: var(--disabled-text);
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