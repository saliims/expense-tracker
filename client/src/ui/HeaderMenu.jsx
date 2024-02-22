import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useSelector } from "react-redux";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";
import { useNavigate } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  function handleClick() {
    navigate("/account");
    console.log(window.location);
  }
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={handleClick}>
          <HiOutlineUser />
          {userInfo.user && userInfo.user.username}
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
