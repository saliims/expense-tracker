import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-50);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  flex: 1;
`;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 300px 1fr;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <Main>
        <Container>
          <Sidebar />
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
