import styled from "styled-components";

export const ListWrapper = styled.div`
    text-align: center;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    list-style: none;
    padding: 20px 0;
    margin: 0;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
    `;

export const Tile = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0;

    @media (max-width: 767px) {
        padding: 30px;
    }
`;

export const TileNumber = styled.div`
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

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;

export const TileDescription = styled.p`
    font-size: 18px;
    line-height: 1.4;
    color:rgb(90, 103, 119);
    margin: 0;

    @media (max-width: 767px) {
        margin-top: 16px;
        font-size: 16px;
    }
`;
