import { Navigate } from "react-router-dom";
import useLocalUser from "../../hooks/user/useLocalUser";

const RouteProtector = ({ element, userType }) => {
  const user = useLocalUser();
  const currentUserType = userType?.find((i) => i === user);
  if (!user) {
    return <Navigate to="/admin-login" />;
  }
  if (user === "super-admin") {
    return element;
  }
  if (currentUserType) {
    return element;
  } else {
    if (user === "agent") {
      return <Navigate to="/support" />;
    }
    return <Navigate to="/" />;
  }
};
export default RouteProtector;
