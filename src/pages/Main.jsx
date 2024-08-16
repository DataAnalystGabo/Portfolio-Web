import styled from "styled-components";
import { CardDefault } from "../components/CardDefault";

export function Main() {
    return (
        <Container>
            <Section>
                <h2>Educación & Certificaciones</h2>
                <CardDefault
                    title="LICENCIATURA EN CIENCIAS DE DATOS"
                    subTitle="2022 - Actualidad"
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
                    title="MINISTERIO DE ESPACIO PÚBLICO e HIGIENE URBANA – GCBA"
                    subTitle="01/04/2023 a 30/04/2024"
                    body="Encargado de crear dashboards, explorar patrones y tendencias, y desarrollar métricas de seguimiento en el área de reclamos ciudadanos. Además, redactaba informes para la toma de decisiones, analizaba y mejoraba el flujo de datos para garantizar su mantenimiento y escalabilidad."
                />
                <CardDefault
                    title="SECRETARIA DE INNOVACIÓN Y TRANSFORMACIÓN DIGITAL – GCBA"
                    subTitle="01/05/2024 a la Actualidad"
                    body="Como miembro del equipo de 'Eficiencia y Administración de Módulos', participo en el desarrollo de dashboards en Power BI, modelado de datos, análisis y creación de informes, y brindo soporte general en materia de datos."
                />
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
    padding: 4rem 2rem;
    overflow-y: auto;
    background-color: var(--background);
`;

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    h2 {
        font-weight: var(--font-weight-medium);
        color: var(--secondary-text);
        padding: 0.625rem 0.625rem 0.625rem 0;
        border-bottom: 1.5px solid var(--disabled-text);
    }
`;
