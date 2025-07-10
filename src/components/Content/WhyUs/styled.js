import styled from "styled-components";

export const WhyUsSection = styled.div`
padding: 0;
padding-bottom: 50px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 50px;
align-items: center;

@media (max-width: 991px) {
        grid-template-columns: 1fr; 
        grid-template-rows: auto auto; 
        grid-gap: 16px;
    }
`;

export const WhyUsImage = styled.img`
    width: clamp(128px, 40vw, 730px);
    height: 100%;
    object-fit: cover;
    border-radius: 30px;

@media (max-width: 991px) {
    width: 100%;
    height: 410px;
    text-align: center;
}
`;

export const WhyUsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ListWrapper = styled.div``;

export const ContentWrapper = styled.div`
    padding: 20px 0;
    height: 100%;
    text-align: center;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    list-style: none;
    padding: 20px 0;
    margin: 0;
    text-align: center;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
    `;

export const Tile = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255 255 255 / 10%);
    border-radius: 30px;
    gap: 20px;
    margin: 0;
    padding: 20px;

     @media (max-width: 991px) {
        max-width: none;
    }
`;

export const TileIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 25px;
    font-weight: bold;
    color: white;
    background-color: #0366D6;
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;

export const TileName = styled.h3`
    font-weight: 700;
    font-size: 24px;
    margin: 0;
`;

export const TileDescription = styled.p`
    font-size: 18px;
    line-height: 1.4;
    color:rgb(199, 199, 199);
    margin: 0;

    @media (max-width: 767px) {
        margin-top: 16px 0;
    }
`;