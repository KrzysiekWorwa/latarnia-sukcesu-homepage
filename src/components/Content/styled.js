
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;

      @media (max-width: 767px) {
      padding: 0 20px;
  }
`;

export const Wrapper = styled.section``;


export const ContentHeader = styled.h2`
    font-size: 60px;
    text-align: center;
    
        @media (max-width: 767px) {
            font-size: 30px;
}
`;
export const Description = styled.p`
  color:rgb(90, 103, 119);
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;