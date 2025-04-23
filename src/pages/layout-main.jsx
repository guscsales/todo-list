import {Outlet, NavLink} from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import Logo from "../assets/images/logo.svg?react";

export default function LayoutMain() {
  return (
    <>
      <Container as="header" className="mt-4 md:mt-20">
        <Logo className="h-9 md:h-12" />
      </Container>
      <main className="mt-8 mb-6">
        <Outlet />
      </main>
      <footer className="my-10">
        <nav className="flex items-center justify-center gap-4">
          <Text
            as={NavLink}
            variant="body-sm-bold"
            to="/"
            className="text-gray-300"
          >
            Tarefas
          </Text>
          <Text
            as={NavLink}
            variant="body-sm-bold"
            to="/componentes"
            className="text-gray-300"
          >
            Componentes
          </Text>
        </nav>
      </footer>
    </>
  );
}
