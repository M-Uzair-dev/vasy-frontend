import React, { useEffect } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CompleteUsers from "../components/TableforUsers/CompleteUsers";
import PaginationRow from "../components/UI/Pagination/PaginationRow";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";

function Users() {
  const { apiCall, response, loading } = useApi("GET");
  useEffect(() => {
    apiCall("/auth");
  }, []);
  const users = response?.data?.users?.filter((i) => i.userType === "Client");
  if (loading) {
    return <LoaderSpinner />;
  }
  return (
    <>
      <DashBoardLayout heading={"Users"} showSearch>
        <CompleteUsers users={users} />
        <PaginationRow />
        <div className="mt-20"></div>
      </DashBoardLayout>
    </>
  );
}

export default Users;
const check = {
  _id: "6711236ec462a032f2e6d424",
  email: "jerowab303@advitize.com",
  password: "$2b$10$V01NdwL.Yl7gwTF6ZE/XWOMRF6VgjIxuali4XqQXiHX5f1me.edQi",
  role: "client",
  userType: "Client",
  firstName: "John",
  lastName: "Doe",
  image: "https://example.com/images/john_doe.jpg",
  mobileNumber: "03001234567",
  createdAt: "2024-10-17T14:47:10.378Z",
  updatedAt: "2024-10-17T14:47:10.378Z",
  __v: 0,
};
