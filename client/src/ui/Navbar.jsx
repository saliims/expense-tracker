import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const StyledNavbar = styled.nav`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavLink>
        <Logo />
      </StyledNavLink>
      <StyledNavLink>
        <HeaderMenu />
      </StyledNavLink>
    </StyledNavbar>
  );
}
