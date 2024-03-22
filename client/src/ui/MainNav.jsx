import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineCog6Tooth, HiOutlineHome } from "react-icons/hi2";
import { UilMoneyInsert, UilMoneyWithdraw } from "@iconscout/react-unicons";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 70vh;
  @media (max-width: 1200px) {
    flex-direction: row;
    height: auto;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (max-width: 1200px) {
    flex-direction: row;
    gap: 1rem;
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 600px) {
    flex-direction: row;
    span {
      display: none;
    }
  }
`;

const LastLi = styled.div`
  color: var(--color-grey-300);
  align-self: center;
  @media (max-width: 1200px) {
    display: none;
  }
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
    @media (max-width: 720px) {
      gap: 0.8rem;
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-indigo-400);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  @media (max-width: 480px) {
    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  /* Hide text on small screens */
`;

export default function MainNav() {
  return (
    <NavWrapper>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/expenses">
            <UilMoneyInsert />
            <span>Expenses</span>
          </StyledNavLink>
        </li>
        {/*<li>
          <StyledNavLink to="/incomes">
            <UilMoneyWithdraw />
            <span>Incomes</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
  */}
      </NavList>
    </NavWrapper>
  );
}
