import styled from "styled-components";
import { CardDefault } from "@components/CardDefault";
import { CardProject } from "@components/CardProject";
import { Pill } from "@components/Pill";
import { IoLogoPython } from "react-icons/io5";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartAreaLineFilled } from "react-icons/tb";
import bannerLinea144 from "@assets/bannerLinea144.webp";
import bannerComingSoon from "@assets/bannerComingSoon.webp";

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
                    body="Programa impartido por el Instituto de Formación Política y Gestión Pública diseñado para proporcionar herramientas específicas para la gestión pública. El mismo se encuentra estructurado en dos partes: un ciclo introductorio de formación en gestión pública y un ciclo de especialización en el campo del análisis de datos."
                />
            </Section>
            <Section>
                <h2>Experiencia Laboral</h2>
                <CardDefault
                    title="MINISTERIO DE ESPACIO PÚBLICO e HIGIENE URBANA – GCBA (Data Analyst)"
                    subTitle="01/04/2023 - 30/04/2024"
                    body="Integré el equipo de la Gerencia Operativa de Reclamos como Analista de Datos, siendo partícipe de grandes proyectos en la Ciudad Autónoma de Buenos Aires."
                />
                <CardDefault
                    title="SECRETARIA DE INNOVACIÓN Y TRANSFORMACIÓN DIGITAL – GCBA (Data Analyst)"
                    subTitle="01/05/2024 - Actualidad"
                    body="Actualmente integro el equipo de Optimización de Subsidios de la Dirección General de Eficiencia Administrativa como Analista de Datos."
                />
            </Section>
            <Section>
                <h2>Projectos</h2>
                <CardsWrapper>
                    <CardProject
                        projectId="1"
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
                        projectId="2"
                        title="Proximamente estará actualizado"
                        body="Si estás leyendo esto espero que me sepas entender. A medida que el trabajo y los estudios me permitan iré actualizando cada uno de mis proyectos construidos. He añadido una nueva función para mis cards, ahora podrás darle 'like' si te ha gustado el  projecto.
                        ¡Gracias por estar aquí"
                        bannerImage={bannerComingSoon}
                    >
                        <Pill
                            skill="Coming Soon"
                            border="1.7px solid #0466c8"
                            backgroundColor="#0466c823"
                            color="#0466c8"
                        ></Pill>
                        <Pill
                            skill="Coming Soon"
                            border="1.7px solid #007200"
                            backgroundColor="#0072001a"
                            color="#007200"
                        ></Pill>
                        <Pill
                            skill="Coming Soon"
                            border="1.7px solid #9381ff"
                            backgroundColor="#9481ff15"
                            color="#9381ff"
                        ></Pill>
                    </CardProject>
                    <CardProject
                        projectId="3"
                        title="Proximamente estará actualizado"
                        body="Si estás leyendo esto espero que me sepas entender. A medida que el trabajo y los estudios me permitan iré actualizando cada uno de mis proyectos construidos. He añadido una nueva función para mis cards, ahora podrás darle 'like' si te ha gustado el  projecto.
                        ¡Gracias por estar aquí!"
                        bannerImage={bannerComingSoon}
                    >
                        <Pill
                            skill="Coming Soon"
                            border="1.7px solid #0466c8"
                            backgroundColor="#0466c823"
                            color="#0466c8"
                        ></Pill>
                        <Pill
                            skill="Coming Soon"
                            border="1.7px solid #007200"
                            backgroundColor="#0072001a"
                            color="#007200"
                        ></Pill>
                        <Pill
                            skill="Coming Soon"
                            border="1.7px solid #9381ff"
                            backgroundColor="#9481ff15"
                            color="#9381ff"
                        ></Pill>
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
    gap: 3rem;
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
        color: var(--primary-color);
        padding: 0.625rem 0.625rem 0.625rem 0;
        border-bottom: 1.5px solid var(--primary-color);
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
