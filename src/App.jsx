import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { MainPage } from "./pages/MainPage";

function App() {
    return (
        <>
            <Container>
                <Sidebar />
                <MainPage></MainPage>
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
