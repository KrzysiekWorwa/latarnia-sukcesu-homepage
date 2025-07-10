import { Container, ContentHeader, Section, SectionBackground } from "../styled";
import { ContentWrapper, List, ListWrapper, Tile, TileDescription, TileIcon, TileName, WhyUsContent, WhyUsImage, WhyUsSection } from "./styled";
import image from "./images/whyUs.webp"
import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";


const WhyUs = () => {

    return (
        <Section id="why">
            <SectionBackground>
                <Container>
                    <StaggeredItem>
                        <ContentHeader>
                            Dlaczego my
                        </ContentHeader>
                    </StaggeredItem>
                    <StaggeredContainer>
                        <WhyUsSection>
                            <WhyUsContent>

                                <ListWrapper>
                                    <List>
                                        <StaggeredItem>
                                            <Tile>
                                                <TileIcon>1</TileIcon>
                                                <TileName>
                                                    Doświadczenie
                                                </TileName>
                                                <TileDescription>
                                                    Wieloletnie doświadczenie i znajomość rynku: Latarnie Sukcesu tworzą ludzie, którzy od wielu lat prowadzą działalności gospodarcze, co jest budzi w nas świadomość, czego dokładnie oczekuje przedsiębiorca, a także wewnętrznie wiemy jak działają Jednostki Samorządu Terytorialnego i Stowarzyszenia.
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <TileIcon>1</TileIcon>
                                                <TileName>
                                                    Doświadczenie
                                                </TileName>
                                                <TileDescription>
                                                    Wieloletnie doświadczenie i znajomość rynku: Latarnie Sukcesu tworzą ludzie, którzy od wielu lat prowadzą działalności gospodarcze, co jest budzi w nas świadomość, czego dokładnie oczekuje przedsiębiorca, a także wewnętrznie wiemy jak działają Jednostki Samorządu Terytorialnego i Stowarzyszenia.
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <TileIcon>1</TileIcon>
                                                <TileName>
                                                    Doświadczenie
                                                </TileName>
                                                <TileDescription>
                                                    Wieloletnie doświadczenie i znajomość rynku: Latarnie Sukcesu tworzą ludzie, którzy od wielu lat prowadzą działalności gospodarcze, co jest budzi w nas świadomość, czego dokładnie oczekuje przedsiębiorca, a także wewnętrznie wiemy jak działają Jednostki Samorządu Terytorialnego i Stowarzyszenia.
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <TileIcon>1</TileIcon>
                                                <TileName>
                                                    Doświadczenie
                                                </TileName>
                                                <TileDescription>
                                                    Wieloletnie doświadczenie i znajomość rynku: Latarnie Sukcesu tworzą ludzie, którzy od wielu lat prowadzą działalności gospodarcze, co jest budzi w nas świadomość, czego dokładnie oczekuje przedsiębiorca, a także wewnętrznie wiemy jak działają Jednostki Samorządu Terytorialnego i Stowarzyszenia.
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                        <StaggeredItem>
                                            <Tile>
                                                <TileIcon>1</TileIcon>
                                                <TileName>
                                                    Doświadczenie
                                                </TileName>
                                                <TileDescription>
                                                    Wieloletnie doświadczenie i znajomość rynku: Latarnie Sukcesu tworzą ludzie, którzy od wielu lat prowadzą działalności gospodarcze, co jest budzi w nas świadomość, czego dokładnie oczekuje przedsiębiorca, a także wewnętrznie wiemy jak działają Jednostki Samorządu Terytorialnego i Stowarzyszenia.
                                                </TileDescription>
                                            </Tile>
                                        </StaggeredItem>
                                    </List>
                                </ListWrapper>
                            </WhyUsContent>

                            <ContentWrapper>
                                <WhyUsImage src={image} alt="Why us" />
                            </ContentWrapper>
                        </WhyUsSection>
                    </StaggeredContainer>
                </Container>
            </SectionBackground>
        </Section>
    )
};

export default WhyUs;