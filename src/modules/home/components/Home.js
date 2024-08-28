import React, { useState } from "react";
import Lion from "../../animals/components/Lion";
import Tiger from "../../animals/components/Tiger";
import {
  Container,
  Image,
  ImagesContainer,
  Phrase,
  Title,
  Subtitle,
} from "../styles/home.style";

export const Home = () => {
  const [phrase, setPhrase] = useState("");
  const lion = new Lion();
  const tiger = new Tiger();
  return (
    <Container>
      <Title>Zoo App</Title>
      <Subtitle>Click an animal image to speak</Subtitle>
      <ImagesContainer>
        <Image
          src={`${process.env.PUBLIC_URL}/assets/lion.png`}
          onClick={() => setPhrase(lion.speak("I'm a lion"))}
        />
        <Image
          src={`${process.env.PUBLIC_URL}/assets/tiger.png`}
          onClick={() => setPhrase(tiger.speak("Lions suck"))}
        />
      </ImagesContainer>
      <Phrase>{phrase}</Phrase>
    </Container>
  );
};
