import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

export default function HeaderMenu() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <StyledHeaderMenu>
      <Link to="/users">
        <ButtonIcon>
          <HiOutlineUser />
          {userInfo.user && userInfo.user.username}
        </ButtonIcon>
      </Link>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
