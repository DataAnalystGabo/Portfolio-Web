import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";

function App() {
    return (
        <>
            <Container>
                <Sidebar />
                <Home></Home>
            </Container>
        </>
    );
}

export default App;

const Container = styled.div`
    display: flex;
`;
