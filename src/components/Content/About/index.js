import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { Button, ButtonWrapper, ContentHeader, Description, Section } from "../styled";
import { AboutUsContent, AboutUsImage, AboutUsSection, AboutWrapper } from "./styled";
import image from "./images/team.webp"


const About = () => (

    <Section id="about">
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
        <StaggeredContainer>
            <AboutUsSection>
                <StaggeredItem>
                    <AboutUsImage src={image} alt="team photo" />
                </StaggeredItem>
                <AboutUsContent>
                    <StaggeredItem>
                        <ContentHeader>
                            O nas
                        </ContentHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            Jesteśmy trzyosobowym zgranym zespołem z wieloletnim doświadczeniem w pozyskiwaniu funduszy dla Jednostek Samorządu Terytorialnego, Prywatnych Przedsiębiorców, a także 3 sektora (Stowarzyszenia). Nad Twoją sprawą pracować będzie cały zespół, doświadczenie pokazuje nam, iż jest to najlepsza forma na wyeliminowanie najmniejszych błędów oraz w sposób znaczący buduje jakość składanych dokumentów.
                        </Description>
                    </StaggeredItem>
                    <StaggeredItem>
                        <ButtonWrapper>
                            <Button>
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