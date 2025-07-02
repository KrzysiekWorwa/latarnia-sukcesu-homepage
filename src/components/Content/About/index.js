import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { ContentHeader, Description, Wrapper } from "../styled";
import { AboutWrapper } from "./styled";


const About = () => (

    <Wrapper id="about">
        <StaggeredContainer>
            <AboutWrapper>
                <StaggeredItem>
                    <ContentHeader>
                        Nasza działalność
                    </ContentHeader>
                </StaggeredItem>
                <StaggeredItem>
                    <Description>
                        Nasz wyspecjalizowany zespół od wielu lat zajmuje się pozyskiwaniem środków na rozwój działalności/zakładanie działalności. W oparciu o nasze doświadczenie przeprowadzimy Cię przez cały proces uzyskania funduszy. Zajmujemy się znalezieniem odpowiedniego dofinansowania pod Twój biznes, weryfikujemy już na wstępie szanse na uzyskanie środków, kompletujemy wspólnie niezbędną dokumentacje, a następnie tworzymy projekt gotowy do złożenia. Jesteśmy wsparciem przy Tworzeniu, rozliczeniu, uzupełnieniu wniosku.
                    </Description>
                </StaggeredItem>
            </AboutWrapper>
        </StaggeredContainer>
    </Wrapper>
);

export default About;