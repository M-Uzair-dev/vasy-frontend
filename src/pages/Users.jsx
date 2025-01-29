import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CompleteUsers from "../components/TableforUsers/CompleteUsers";
import PaginationRow from "../components/UI/Pagination/PaginationRow";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";
import { useNavigate } from "react-router-dom";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [total, setTotal] = useState(0);
  const [prevpages, setPrevPages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let getAllUsers = async () => {
      try {
        console.log(prevpages[page]);
        if (prevpages[page]) {
          setUsers(prevpages[page][0]);
          return;
        }
        setLoading(true);

        const res = await api.post("/auth/clients", { dataPerPage, page });
        console.log(res);
        if ((res.status = 200)) {
          setUsers(res.data.clients);
          setTotal(res.data.total);
          setLoading(false);
        } else {
          toastMessage(res.data.message || "Something went wrong", "error");
          setLoading(false);
          navigate("/");
        }
      } catch (e) {
        toastMessage(e.data.message || "Something went wrong", "error");
        setLoading(false);
        navigate("/");
      }
    };
    getAllUsers();
    document.title = "Vasy - Users";
  }, [page, dataPerPage]);

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <>
      <DashBoardLayout heading={"Users"} showSearch>
        <CompleteUsers users={users} />
        <PaginationRow
          dataPerPage={dataPerPage}
          page={page}
          setPage={setPage}
          setDataPerPage={setDataPerPage}
          total={total}
          setPrevPages={setPrevPages}
          prevPages={prevpages}
          data={users}
          endMessage={"No More Users !"}
        />
        <div className="mt-20"></div>
      </DashBoardLayout>
    </>
  );
}

export default Users;
