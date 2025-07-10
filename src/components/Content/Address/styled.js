import styled from "styled-components";
import { ReactComponent as FacebookIconLink } from "./SvgIcons/facebookIcon.svg";
import { ReactComponent as InstagramIconLink } from "./SvgIcons/instagramIcon.svg";
import { ReactComponent as PhoneIconLink } from "./SvgIcons/phone.svg";
import { ReactComponent as MailIconLink } from "./SvgIcons/mail.svg";
import { ReactComponent as PinIconLink } from "./SvgIcons/pin.svg";

export const AddressSection = styled.section``;

export const AddressHeader = styled.h2`
    font-size: 48px;
    text-align: center;
    margin-top: 0;
    
    @media (max-width: 767px) {
        font-size: 32px;
}
`;

export const AddressSubHeader = styled.h3`
    font-size: 24px;
    margin-top: 0;
        @media (max-width: 767px) {
        font-size: 18px;
}
`;

export const AddressInfo = styled.address`
    font-style: normal;
`;

export const LinkWrapper = styled.div`
    margin: 12px 0;
`;

export const AddressLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s;
    color: rgb(0, 34, 92);

    &:hover {
        color: rgb(0, 153, 255);
    }

    @media (max-width: 767px) {
    font-size: 17px;
}
`;

export const Info = styled.p`
    font-size: 18px;
    font-weight: 400;
    max-width: 670px;
    line-height: 1.4;

    @media (max-width: 767px) {
    font-size: 16px;
}
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 24px;

    @media (max-width: 767px) {
        margin: 18px 0;
        gap: 16px;
}
`;

export const FacebookIcon = styled(FacebookIconLink)`
    width: 48px;
    height: 48px;
    color:rgb(0, 34, 92);
    transition: color 0.3s;

        &:hover {
        color:rgb(0, 153, 255);
    }
`;

export const InstagramIcon = styled(InstagramIconLink)`
    width: 48px;
    height: 48px;
    color:rgb(0, 34, 94);
    transition: color 0.3s;

        &:hover {
        color: rgb(0, 153, 255);
    }
`;

export const AddressContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 767px) {
    flex-direction: column;
    gap:0;
  }
`;

export const PhoneIcon = styled(PhoneIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

        @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
`;

export const MailIcon = styled(MailIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

        @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
  `;