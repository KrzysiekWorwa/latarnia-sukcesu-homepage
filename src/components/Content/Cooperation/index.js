import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { ContentHeader, Description, Section, Wrapper } from "../styled";


const Cooperation = () => (
    <Section id="cooperation">
        <StaggeredContainer>
            <StaggeredItem>
                <ContentHeader>
                    Nasze Usługi
                </ContentHeader>
            </StaggeredItem>
            <StaggeredItem>
                <Description>
                    Specjalizujemy się w pozyskiwaniem funduszy z najróżniejszych źródeł. Jesteśmy doświadczeni w pozyskiwaniu funduszy na małe projekty o tematyce miękkiej, kulturalnej itp., jak również odnieśliśmy już sukcesy w projektach na ogromną skalę.
                </Description>
            </StaggeredItem>
        </StaggeredContainer>
    </Section>
);

export default Cooperation;