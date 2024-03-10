import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <div className="flex felx-row gap-3">
          <BiLogOut
            className="w-6 h-6 text-black cursor-pointer font-bold hover:text-fuchsia-800 "
            onClick={logout}
          />
          <span>Log Out</span>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
