import styled from "styled-components";

export const ItemPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  margin: 40px auto;
  font-family: "Montserrat", sans-serif;
  box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.66);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const ItemPageContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin: 0 auto;

  button {
    width: 30%;
    padding: 5px;
    display: flex;
    width: 100px;
    align-items: center;
    color: #fff;
    justify-content: center;
    background-color: rgba(35, 41, 45, 0.75);
    letter-spacing: 1px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    position: absolute;

    > span {
      margin-right: 5px;
      margin-left: 5px;
      font-size: 20px;
      transition: all 0.3s ease;
      color: #fff;
    }

    &:hover > span {
      transform: translateX(-6px);
    }

    &:hover {
      background-color: rgba(35, 41, 45, 1);
    }
  }

  h1 {
    margin-top: 0;
    color: #23292d;
    font-weight: 400;
    text-align: left;
  }

  a {
    background-color: #000;
    color: #eee;
    border-radius: 0.5rem;
    font-size: calc(12px + 2 * ((100vw - 320px) / 680));
    font-weight: 400;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none #d1d5db solid;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0);
    transition: 0.3s ease;
    width: 260px;

    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
`;

export const ItemPageContentTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 40px 10px;
  font-family: "Montserrat", sans-serif;
  background: url("https://i.ibb.co/gmgV7pT/5482917.png");
  border-bottom: 4px solid #f6f6f6;
  position: relative;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

export const ItemPageContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 20px 40px;
  font-family: "Montserrat", sans-serif;
  background: #fff;
  color: #23292d;

  p {
    font-size: calc(14px + 2 * ((100vw - 320px) / 680));
    font-weight: 600;
    margin: 0;
    text-align: left;

    span {
      font-size: calc(14px + 2 * ((100vw - 320px) / 680));
      font-weight: 400;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px auto;
  display: block;
  border-bottom: 1px solid #ddd;
`;
