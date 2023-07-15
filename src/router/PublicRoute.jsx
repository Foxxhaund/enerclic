import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { DATA } from "../const/routes";

export default function PublicRoute() {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to={DATA} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}