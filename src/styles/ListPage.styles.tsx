import styled, { keyframes } from "styled-components";

const ldsRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Ring = styled.div`
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
`;

export const RingItem = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 34px;
  height: 34px;
  border: 4px solid #23292d;
  border-radius: 50%;
  animation: ${ldsRingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #23292d transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;

  h1 {
    color: #23292d;
    text-align: center;
  }

  p {
    color: #23292d;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px auto;

  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    display: flex;
    align-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;

    li {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      align-content: center;
      border-radius: 6px;
      padding: 0;
      margin-right: 40px;
      flex-basis: 20%;
      height: 250px;
      margin-bottom: 20px;
      background-color: rgba(255, 255, 255, 0.75);
      transition: 0.3s ease;
      color: #23292d;
      font-size: calc(14px + 2 * ((100vw - 320px) / 680));
      box-shadow: 1px 1px 1x 1px rgba(0, 0, 0, 0);
      cursor: pointer;
      cursor: hand;

      a {
        text-decoration: none;
        width: 100%;
        p {
          font-size: 20px;
          transition: all 0.3s ease;
          color: #23292d;
          transform: scale(1);
        }
      }

      &:hover {
        color: #23292d;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 1px 1px 8px 4px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 2;
        transform: scale(1.1);

        a {
          p {
            transform: translateX(6px) !important;
            color: #23292d;
          }
        }
      }
    }
  }
`;

export const WrapPaginationBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 30px 0;
`;

export const PaginationBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  p {
    color: #999;
    margin: 0 10px;
  }

  button {
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 6px;
    margin-right: 6px;
    text-align: center;
    color: #23292d;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: 0.3s ease;

    :disabled {
      pointer-events: none;
      opacity: 0.75;
      background-color: rgba(0, 0, 0, 0);
    }

    &:hover {
      background-color: #fff;

      img {
        opacity: 0.5;
      }
    }
  }
`;
