import About from "./About";
import Cooperation from "./Cooperation";
import { Container } from "./styled";
import Team from "./Team";
import WhyUs from "./WhyUs";

const Content = () => {
    return (
        <Container>
            <About />
            <Cooperation />
            <Team />
            <WhyUs />
        </Container>
    );
};

export default Content;