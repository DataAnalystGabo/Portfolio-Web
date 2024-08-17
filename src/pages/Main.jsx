import styled from "styled-components";
import { CardDefault } from "../components/CardDefault";
import { CardProject } from "../components/CardProject";
import { Pill } from "../components/Pill";
import { IoLogoPython } from "react-icons/io5";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartAreaLineFilled } from "react-icons/tb";

export function Main() {
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
                    body="Encargado de crear dashboards, explorar patrones y tendencias, y desarrollar métricas de seguimiento en el área de reclamos ciudadanos. Además, redactaba informes para la toma de decisiones, analizaba y mejoraba el flujo de datos para garantizar su mantenimiento y escalabilidad."
                />
                <CardDefault
                    title="SECRETARIA DE INNOVACIÓN Y TRANSFORMACIÓN DIGITAL – GCBA (Data Analyst)"
                    subTitle="01/05/2024 - Actualidad"
                    body="Como miembro del equipo de 'Eficiencia y Administración de Módulos', participo en el desarrollo de dashboards en Power BI, modelado de datos, análisis y creación de informes, y brindo soporte general en materia de datos."
                />
            </Section>
            <Section>
                <h2>Projectos</h2>
                <CardProject
                    title="Análisis descriptivo de la Linea 144"
                    body="¿Cúal es la edad media de las personas que denuncian violencia de género?, ¿cuántos tipos de géneros podemos encontrar?, ¿cuál es la distribución de llamados en el tiempo? Te invito a que exploremos juntos la base de llamados de la Línea 144 con Python y las librerías Matplotlib y Seaborn."
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
            </Section>
        </Container>
    );
}

const Container = styled.div`
    height: 200vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 4rem 5rem;
    overflow-y: auto;
    background-color: var(--background);
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
