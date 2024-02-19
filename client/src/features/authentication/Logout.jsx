import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";

import { useDispatch } from "react-redux";
import { logout } from "./authSlice";

export default function Logout() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <ButtonIcon onClick={handleLogout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}
