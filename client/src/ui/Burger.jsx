import styled from "styled-components";
import { HiBars3 } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <ButtonIcon>
          <HiBars3 />
        </ButtonIcon>
      </StyledBurger>
      <HeaderMenu open={open} setOpen={setOpen} />
    </>
  );
}
