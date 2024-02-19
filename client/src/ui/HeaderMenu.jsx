import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../features/authentication/Logout";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/users")}>
          <HiOutlineUser />
          {userInfo.user && userInfo.user.username}
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
