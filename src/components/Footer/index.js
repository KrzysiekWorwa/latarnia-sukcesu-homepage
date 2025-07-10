import { FacebookIcon, FooterCopyright, FooterIcons, FooterLogo, FooterSection, FooterWrapper, HomeButton, InstagramIcon } from "./styled";
import Logo from "./financial.png"
import { ReactComponent as ArrowIcon } from "./SvgIcons/arrow.svg";

const Footer = () => (
    <>

        <FooterSection>
            <HomeButton to="home" smooth={true} duration={2000} offset={-90}>
                <ArrowIcon />
            </HomeButton>
            <FooterWrapper>
                <FooterLogo src={Logo} />
                <FooterIcons>
                    <a href="https://www.facebook.com/przystanczorsztynianka" target="_blank" title="Facebook" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/czorsztynianka/" target="_blank" title="Instagram" rel="noreferrer">
                        <InstagramIcon />
                    </a>
                </FooterIcons>
                <FooterCopyright>
                    Latarnia sukcesu<br />
                    © Copyright 2025
                </FooterCopyright>
            </FooterWrapper>
        </FooterSection>
    </>
);


export default Footer;