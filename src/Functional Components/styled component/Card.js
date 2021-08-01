import React from "react";
import nerdImage from "./assets/images/illustration.png";
import Button from "./Button";
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "./styles/Container.styles";
import { H1, P, Tag, Image } from "./styles/Elements";
const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#fff"> Exclusive</Tag>
        <H1>React Styled Components</H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <ButtonContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
};

export default Card;
