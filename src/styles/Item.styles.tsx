import styled from "styled-components";

export const ListPageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: calc(16px + 2 * ((100vw - 320px) / 680));
    color: #23292d;
    width: 100%;
    font-weight: 400;
    //margin-top: 60px;
    text-align: center;
    transition: 0.3s ease;
  }
`;

export const ItemContentTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  font-family: "Montserrat", sans-serif;
  background: url("https://i.ibb.co/gmgV7pT/5482917.png");
  border-bottom: 4px solid #f6f6f6;
  position: relative;
`;

export const ItemImgWrap = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;
