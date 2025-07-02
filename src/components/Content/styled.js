
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;

      @media (max-width: 991px) {
      padding: 0 20px;
  }
`;

export const Section = styled.section``;

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

export const ButtonWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

export const Button = styled.a`
  padding: 14px 30px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background: #0366D6;
  border: 1px solid;
  border-color: #0366D6;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  font-size: 25px;
  display: inline-block;

      &:hover {
        background: rgb(0, 153, 255);
        border-color:rgb(0, 153, 255);
    }
`;