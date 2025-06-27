import styled from "styled-components";

export const HeroSection = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0px;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    padding: 170px 0 60px;
    position: relative;
    width: 100%;

`;

export const HeroBackground = styled.div`
    background: linear-gradient(180deg, var(--token-d09dbddc-bae0-464f-8a47-9094dda9c7cd, #4f7ac2) 0%, var(--token-d8251216-3fe5-4bcc-90da-d20c92d0e2e3, rgb(0, 23, 63)) 100%);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    flex: none;
    height: 80%;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
`;

export const HeroWrapper = styled.div`
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 200px;
    justify-content: space-between;
    padding: 0 60px;
    position: relative;
`;

export const HeroContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: flex-start;
`;

export const HeroImage = styled.div`
  display: flex;
  
  height: auto;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
  }
`;

export const HeroHeader = styled.h1`
    font-size: 64px;
    text-align: left;
    
    @media (max-width: 767px) {
font-size: 32px;
}
`;

export const HeroSubHeader = styled.h2`
    font-size: 24px;
    text-align: left;
    
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