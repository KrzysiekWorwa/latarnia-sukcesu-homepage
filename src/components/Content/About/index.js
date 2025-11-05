import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { Button, ButtonWrapper, ContentHeader, Description, Section } from "../styled";
import { AboutUsContent, AboutUsImage, AboutUsSection, AboutWrapper } from "./styled";
import image from "./images/team.webp"
import { Link } from "react-scroll";


const About = () => (

    <Section id="about">
        <AboutWrapper>
            <StaggeredContainer>
                <StaggeredItem>
                    <ContentHeader>
                        Nasza działalność
                    </ContentHeader>
                </StaggeredItem>
                <StaggeredItem>
                    <Description>
                        Nasz wyspecjalizowany zespół od wielu lat zajmuje się pozyskiwaniem środków na rozwój i podjęcie działalności gospodarczej, na realizację zamierzonych celów organizacji pozarządowych. Wspieramy ponadto samorządy w drodze do urozmaicenia oferty kulturalno-infrastrukturalnej.
                    </Description>
                    <Description>
                        W oparciu o nasze doświadczenie przeprowadzimy Cię przez cały proces uzyskania funduszy. Zajmujemy się dopasowaniem dofinasowania do konkretnych potrzeb pod Twój biznes czy działania statutowe. Już na wstępie weryfikujemy Twoje szanse na uzyskanie środków, kompletujemy wspólnie niezbędną dokumentacje, a następnie tworzymy projekt gotowy do złożenia.
                    </Description>
                    <Description>
                        Na każdym etapie przygotowania dokumentacji jesteśmy do Twojej dyspozycji.
                    </Description>

                </StaggeredItem>
            </StaggeredContainer>
        </AboutWrapper>

        <StaggeredContainer>
            <AboutUsSection>
                <StaggeredItem>
                    <AboutUsImage src={image} alt="Team photo" />
                </StaggeredItem>
                <AboutUsContent>
                    <StaggeredItem>
                        <ContentHeader>
                            O nas
                        </ContentHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            Jesteśmy trzyosobowym zgranym zespołem, z wieloletnim doświadczeniem w pozyskiwaniu funduszy dla Jednostek Samorządu Terytorialnego, Prywatnych Przedsiębiorców, a także 3 sektora (Stowarzyszenia, Fundacje).
                        </Description>
                        <Description>
                            Nad Twoją sprawą pracować będzie cały zespół, gdyż doświadczenie pokazuje nam, iż jest to najlepsza forma na wyeliminowanie najmniejszych błędów oraz w sposób znaczący buduje jakość składanych dokumentów.
                        </Description>
                    </StaggeredItem>
                    <StaggeredItem>
                        <ButtonWrapper>
                            <Button as={Link} to="cooperation" smooth={true} duration={800} offset={-150}>
                                Poznaj ofertę
                            </Button>
                        </ButtonWrapper>
                    </StaggeredItem>
                </AboutUsContent>
            </AboutUsSection>
        </StaggeredContainer>
    </Section>
);

export default About;