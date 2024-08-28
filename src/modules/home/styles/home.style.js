import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: white;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: white;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 20px;
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
  cursor: pointer;
`;

export const Phrase = styled.p`
  font-size: 1.6rem;
  color: white;
`;
