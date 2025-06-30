import styled from "styled-components";

export const HeroSection = styled.section`
    padding: 0 60px;
    padding-bottom: 60px;
    width: 100%;
    background: linear-gradient(180deg,rgb(84, 123, 189) 0%, rgb(0, 28, 77) 100%);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

        @media (max-width: 767px) {
            padding: 0 20px;
            height: auto;
    }

`;

export const HeroWrapper = styled.div`
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 60px;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    margin: 0 auto;
    padding-top: 170px;
    padding-left: 60px;
    padding-right: 60px;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      padding: 80px 20px;
      padding-top: 80px;
    }
    @media (max-width: 767px) {
      padding-bottom: 40px;
}
`;

export const HeroContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 40px;
`;

export const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 546px;
  position: relative;
  z-index: 1;
  margin-bottom: -110px;

          @media (max-width: 767px) {
            margin-bottom: 0;
}

  img {
    max-width: 546px;
    max-height: 730px;
    width: 100%;
    height: auto;   
    object-fit: cover;
    border-radius: 30px;
    display: block;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const HeroHeader = styled.h1`
    font-size: 64px;
    text-align: left;
    margin: 25px 0;

    
    @media (max-width: 767px) {
    font-size: 32px;
    }
`;

export const HeroSubHeader = styled.h2`
    font-size: 24px;
    text-align: left;
    margin: 0;
    
        @media (max-width: 767px) {
        font-size: 18px;
}
`;

export const HeroDescription = styled.p`
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 16px;
    text-align: left;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const HeroButton = styled.a`
  padding: 14px 30px;
  text-decoration: none;
  cursor: pointer;
  color: black;
  background:  #FBFBFE;
  border: 1px solid;
  border-color: #FBFBFE;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  align-self: flex-start;
  font-size: 25px;

      &:hover {
        background:rgb(84, 123, 189);
        border-color: rgb(84, 123, 189);
        color: white;
    }
      @media (max-width: 767px) {
        font-size: 18px;
}

`;