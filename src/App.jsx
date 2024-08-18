import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./pages/Main";

function App() {
    return (
        <>
            <Container>
                <Sidebar />
                <Main></Main>
            </Container>
        </>
    );
}

export default App;

const Container = styled.div`
    display: flex;

    @media (max-width: 950px) {
        flex-direction: column;
    }
`;
