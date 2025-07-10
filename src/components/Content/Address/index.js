import { StaggeredContainer, StaggeredItem } from "../../../animations/staggeredFadeIn";
import { ContentHeader, Description } from "../styled";
import { Info, IconsWrapper, FacebookIcon, InstagramIcon, AddressSection, AddressHeader, AddressInfo, AddressSubHeader, LinkWrapper, AddressLink, AddressContentWrapper, PhoneIcon, MailIcon } from "./styled";

const Address = () => (
    <AddressSection id="address">
        <StaggeredContainer>
            <StaggeredItem>
                <ContentHeader>
                    Kontakt
                </ContentHeader>
            </StaggeredItem>
            <StaggeredItem>
                <AddressHeader>
                    Rozwiń swój biznes
                </AddressHeader>
            </StaggeredItem>
            <StaggeredItem>
                <Description>
                    Jeśli masz jakiekolwiek pytania lub chcesz dowiedzieć się więcej o naszych usługach, skontaktuj się z nami. Nasz zespół doświadczonych specjalistów służy pomocą i wsparciem, którego potrzebujesz, aby uzyskać dofinansowanie i skutecznie rozwinąć swój biznes.
                </Description>
            </StaggeredItem>
        </StaggeredContainer>

        <AddressContentWrapper>
            <StaggeredContainer>
                <StaggeredItem>
                    <AddressInfo>
                        <AddressSubHeader>
                            Dane kontaktowe
                        </AddressSubHeader>
                        <Info>
                            Robert Wojtaszek Latarnia Sukcesu<br />
                            NIP: 7351002000 <br />
                            ul. Krótka 6 <br />
                            34-440 Czorsztyn <br />
                        </Info>
                        <LinkWrapper>
                            <AddressLink href="tel:+48514183913" title="telefon"><PhoneIcon /> 514 183 913</AddressLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <AddressLink href="mailto:biuro@zalewczorsztynski.com" title="biuro@zalewczorsztynski.com"><MailIcon />biuro@zalewczorsztynski.com</AddressLink>
                        </LinkWrapper>
                        <IconsWrapper>
                            <a href="https://www.facebook.com/przystanczorsztynianka" target="_blank" title="Facebook" rel="noreferrer">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/czorsztynianka/" target="_blank" title="Instagram" rel="noreferrer">
                                <InstagramIcon />
                            </a>
                        </IconsWrapper>
                    </AddressInfo>
                </StaggeredItem>
            </StaggeredContainer>
        </AddressContentWrapper>
    </AddressSection>
);

export default Address;