import About from "./About";
import Cooperation from "./Cooperation";
import { Container } from "./styled";
import Team from "./Team";

const Content = () => {
    return (
        <Container>
            <About />
            <Cooperation />
            <Team />
        </Container>
    );
};

export default Content;