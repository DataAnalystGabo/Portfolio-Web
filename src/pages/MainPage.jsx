import styled from "styled-components";
import { CardDefault } from "../components/CardDefault";
import { CardProject } from "../components/CardProject";
import { Pill } from "../components/Pill";
import { IoLogoPython } from "react-icons/io5";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartAreaLineFilled } from "react-icons/tb";
import bannerLinea144 from "../assets/bannerLinea144.webp";

export function MainPage() {
    return (
        <Container>
            <Section>
                <h2>Educación & Certificaciones</h2>
                <CardDefault
                    title="LICENCIATURA EN CIENCIAS DE DATOS"
                    subTitle="2021 - Actualidad"
                    body="Universidad Nacional de Almirante Brown - 14 de 30 materias aprobadas."
                />
                <CardDefault
                    title="CERTIFICACIÓN ESPECIALIZACIÓN EN GESTIÓN PÚBLICA Y DATOS"
                    subTitle="Abril 2024 - Junio 2024"
                    body="El programa impartido por el Instituto de Formación Política y Gestión Pública está diseñado para proporcionar herramientas específicas para la gestión pública. Está estructurado en dos partes: un ciclo introductorio de formación en gestión pública y el programa de especialización propiamente dicho"
                />
            </Section>
            <Section>
                <h2>Experiencia Laboral</h2>
                <CardDefault
                    title="MINISTERIO DE ESPACIO PÚBLICO e HIGIENE URBANA – GCBA (Data Analyst)"
                    subTitle="01/04/2023 - 30/04/2024"
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when."
                />
                <CardDefault
                    title="SECRETARIA DE INNOVACIÓN Y TRANSFORMACIÓN DIGITAL – GCBA (Data Analyst)"
                    subTitle="01/05/2024 - Actualidad"
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when."
                />
            </Section>
            <Section>
                <h2>Projectos</h2>
                <CardsWrapper>
                    <CardProject
                        title="Análisis descriptivo de la Linea 144"
                        body="¿Cúal es la edad media de las personas que denuncian violencia de género?, ¿cuántos tipos de géneros podemos encontrar?, ¿cuál es la distribución de llamados en el tiempo? Te invito a que exploremos juntos la base de llamados de la Línea 144 con Python y las librerías Matplotlib y Seaborn."
                        bannerImage={bannerLinea144}
                    >
                        <Pill
                            skill="Python"
                            border="1.7px solid #0466c8"
                            backgroundColor="#0466c823"
                            color="#0466c8"
                        >
                            <IoLogoPython />
                        </Pill>
                        <Pill
                            skill="Matplotlib"
                            border="1.7px solid #007200"
                            backgroundColor="#0072001a"
                            color="#007200"
                        >
                            <AiOutlineRadarChart />
                        </Pill>
                        <Pill
                            skill="Seaborn"
                            border="1.7px solid #9381ff"
                            backgroundColor="#9481ff15"
                            color="#9381ff"
                        >
                            <TbChartAreaLineFilled />
                        </Pill>
                    </CardProject>
                    <CardProject
                        title="Análisis descriptivo de la Linea 144"
                        body="¿Cúal es la edad media de las personas que denuncian violencia de género?, ¿cuántos tipos de géneros podemos encontrar?, ¿cuál es la distribución de llamados en el tiempo? Te invito a que exploremos juntos la base de llamados de la Línea 144 con Python y las librerías Matplotlib y Seaborn."
                        bannerImage={bannerLinea144}
                    >
                        <Pill
                            skill="Python"
                            border="1.7px solid #0466c8"
                            backgroundColor="#0466c823"
                            color="#0466c8"
                        >
                            <IoLogoPython />
                        </Pill>
                        <Pill
                            skill="Matplotlib"
                            border="1.7px solid #007200"
                            backgroundColor="#0072001a"
                            color="#007200"
                        >
                            <AiOutlineRadarChart />
                        </Pill>
                        <Pill
                            skill="Seaborn"
                            border="1.7px solid #9381ff"
                            backgroundColor="#9481ff15"
                            color="#9381ff"
                        >
                            <TbChartAreaLineFilled />
                        </Pill>
                    </CardProject>
                    <CardProject
                        title="Análisis descriptivo de la Linea 144"
                        body="¿Cúal es la edad media de las personas que denuncian violencia de género?, ¿cuántos tipos de géneros podemos encontrar?, ¿cuál es la distribución de llamados en el tiempo? Te invito a que exploremos juntos la base de llamados de la Línea 144 con Python y las librerías Matplotlib y Seaborn."
                        bannerImage={bannerLinea144}
                    >
                        <Pill
                            skill="Python"
                            border="1.7px solid #0466c8"
                            backgroundColor="#0466c823"
                            color="#0466c8"
                        >
                            <IoLogoPython />
                        </Pill>
                        <Pill
                            skill="Matplotlib"
                            border="1.7px solid #007200"
                            backgroundColor="#0072001a"
                            color="#007200"
                        >
                            <AiOutlineRadarChart />
                        </Pill>
                        <Pill
                            skill="Seaborn"
                            border="1.7px solid #9381ff"
                            backgroundColor="#9481ff15"
                            color="#9381ff"
                        >
                            <TbChartAreaLineFilled />
                        </Pill>
                    </CardProject>
                </CardsWrapper>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 4rem 5rem;
    overflow-y: auto;
    background-color: var(--background);
    @media (max-width: 950px) {
        padding: 2rem 1rem;
        gap: 2rem;
    }
`;

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
        font-weight: var(--font-weight-medium);
        color: var(--secondary-text);
        padding: 0.625rem 0.625rem 0.625rem 0;
        border-bottom: 1.5px solid var(--disabled-text);
    }
`;

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
    overflow-y: hidden;
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        gap: 2rem;
    }
`;
