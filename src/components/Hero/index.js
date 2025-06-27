import { HeroBackground, HeroContent, HeroDescription, HeroHeader, HeroImage, HeroSection, HeroSubHeader, HeroWrapper } from "./styled";
import heroImage from "./hero.webp";

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
                    <HeroDescription>
                        Nasz wyspecjalizowany zespół od wielu lat zajmuje się pozyskiwaniem środków na rozwój działalności/zakładanie działalności. W oparciu o nasze doświadczenie przeprowadzimy Cię przez cały proces uzyskania funduszy. Zajmujemy się znalezieniem odpowiedniego dofinansowania pod Twój biznes, weryfikujemy już na wstępie szanse na uzyskanie środków, kompletujemy wspólnie niezbędną dokumentacje, a następnie tworzymy projekt gotowy do złożenia. Jesteśmy wsparciem przy Tworzeniu, rozliczeniu, uzupełnieniu wniosku.
                    </HeroDescription>
                </HeroContent>
                <HeroImage>
                    <img src={heroImage} alt="zdjęcie przedstawiające właściciela" />
                </HeroImage>
            </HeroWrapper>
        </HeroBackground>
    </HeroSection>
);

export default Hero;