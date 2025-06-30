import { ButtonWrapper, HeroButton, HeroContent, HeroHeader, HeroImage, HeroSection, HeroSubHeader, HeroWrapper } from "./styled";
import heroImage from "./hero-stock.webp";

const Hero = () => (
    <HeroSection id="home">
            <HeroWrapper>
                <HeroContent>
                    <HeroHeader>
                        Pozyskaj Finansowanie razem z naszą pomocą
                    </HeroHeader>
                    <HeroSubHeader>
                        Twój pokład potrzebuje środków na rozwój lub założenie działalności? Jesteś w idealnym miejscu!
                    </HeroSubHeader>
                    <ButtonWrapper>
                        <HeroButton>
                            Skontaktuj się z nami
                        </HeroButton>
                    </ButtonWrapper>
                </HeroContent>
                <HeroImage>
                    <img src={heroImage} alt="zdjęcie przedstawiające właściciela" />
                </HeroImage>
            </HeroWrapper>
    </HeroSection>
);

export default Hero;