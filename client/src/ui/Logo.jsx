import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
`;

const Img = styled.img`
  height: 5rem;
  width: auto;
`;

function Logo() {
  const src = "/money.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" /> Expense tracker
    </StyledLogo>
  );
}

export default Logo;
