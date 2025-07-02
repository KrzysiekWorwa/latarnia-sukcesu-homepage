import { ButtonWrapper, HeroButton, HeroContent, HeroHeader, HeroImage, HeroSection, HeroSubHeader, HeroWrapper } from "./styled";
import heroImage from "./hero-stock.webp";
import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";

const Hero = () => (
    <HeroSection id="home">
        <StaggeredContainer>
            <HeroWrapper>
                <HeroContent>
                    <StaggeredItem>
                        <HeroHeader>
                            Pozyskaj Finansowanie razem z naszą pomocą
                        </HeroHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <HeroSubHeader>
                            Twój pokład potrzebuje środków na rozwój lub założenie działalności? Jesteś w idealnym miejscu!
                        </HeroSubHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <ButtonWrapper>
                            <HeroButton>
                                Skontaktuj się z nami
                            </HeroButton>
                        </ButtonWrapper>
                    </StaggeredItem>
                </HeroContent>
                    <HeroImage>
                        <StaggeredItem>
                        <img src={heroImage} alt="zdjęcie przedstawiające właściciela" />
                        </StaggeredItem>
                    </HeroImage>
            </HeroWrapper>
        </StaggeredContainer>
    </HeroSection>
);

export default Hero;