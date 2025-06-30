import { HeroBackground, HeroButton, HeroContent, HeroDescription, HeroHeader, HeroImage, HeroSection, HeroSubHeader, HeroWrapper } from "./styled";
import heroImage from "./hero-stock.webp";

const Hero = () => (
    <HeroSection id="home">
        <HeroBackground>
            <HeroWrapper>
                <HeroContent>
                    <HeroHeader>
                        Pozyskaj Finansowanie razem z naszą pomocą
                    </HeroHeader>
                    <HeroSubHeader>
                        Twój pokład potrzebuje środków na rozwój lub założenie działalności? Jesteś w idealnym miejscu!
                    </HeroSubHeader>
                    <HeroButton>
                        Skontaktuj się z nami
                    </HeroButton>
                </HeroContent>
                <HeroImage>
                    <img src={heroImage} alt="zdjęcie przedstawiające właściciela" />
                </HeroImage>
            </HeroWrapper>
        </HeroBackground>
    </HeroSection>
);

export default Hero;