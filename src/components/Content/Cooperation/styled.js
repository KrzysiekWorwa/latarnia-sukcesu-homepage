import styled from "styled-components";

export const ListWrapper = styled.div`
    text-align: center;
    padding-bottom: 50px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
    max-width: 420px;
    transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }

     @media (max-width: 991px) {
        max-width: none;
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
    background-color: #ffc40b;
    height: 50px;
    width: 50px;
    border-radius: 50%;

        ${Tile}:hover & {
        background-color: #ffd700;
    }
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
    transition: color 0.3s ease;

    ${Tile}:hover & {
        color: white;
    }

    @media (max-width: 767px) {
        margin-top: 16px 0;
    }
`;

export const TileWrapper = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 30px;
    list-style: none;
    padding: 20px 0;
    margin: 0;

        @media (max-width: 991px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
        padding: 0;
        padding-bottom: 10px;
        place-items: center;
    }
`;
