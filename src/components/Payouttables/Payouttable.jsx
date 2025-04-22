import React, { useEffect, useState } from "react";
import { Badge, Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { GiCancel } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import AddAmountModal from "../UI/Modals/AddAmountModal";
import CustomBadge from "../UI/Badges/CustomBadge";
import Bank from "../UI/Modals/Bank";
import DeleteModal from "../UI/Modals/DeleteModal";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
import { toastMessage } from "../UI/Toast/toastMessage";
import { api } from "../../api/useAxios";

function Payouttable() {
  const [open1, setopen1] = useState(false);
  const [open, setopen] = useState(false);
  const [bank, setBank] = useState({});
  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const { apiCall, response, loading } = useApi("GET", (data) => {
    console.log(data);
  });
  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
  }
  useEffect(() => {
    apiCall("/payment");
  }, []);

  const accept = async (id) => {
    try {
      if (!id) {
        return;
      }
      toastMessage("updating...", "info");
      await api.put("/payment", {
        paymentId: id,
        status: "completed",
      });
      setAccepted((prev) => {
        return [...prev, id];
      });
      setRejected((prev) => {
        return prev.filter((item) => item !== id);
      });
    } catch (e) {
      toastMessage("Something went wrong !", "error");
      window.location.reload();
    }
  };
  const reject = async (id) => {
    try {
      if (!id) {
        return;
      }
      await api.put("/payment", {
        paymentId: id,
        status: "failed",
      });
      setRejected((prev) => {
        return [...prev, id];
      });
      setAccepted((prev) => {
        return prev.filter((item) => item !== id);
      });
    } catch (e) {
      toastMessage("Something went wrong !", "error");
      window.location.reload();
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }

  return (
    <>
      {open && <Bank openModal={open} setOpenModal={setopen} bank={bank} />}

      <div className="overflow-x-auto min-h-[80vh]">
        {open1 && <DeleteModal setDeleteModal={setopen1} deleteModal={open1} />}
        <Table>
          <Table.Head>
            <Table.HeadCell>
              <Checkbox />{" "}
            </Table.HeadCell>
            <Table.HeadCell>User type</Table.HeadCell>
            <Table.HeadCell>Name </Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Paid date </Table.HeadCell>
            <Table.HeadCell>Status </Table.HeadCell>
            <Table.HeadCell>Admin note</Table.HeadCell>
            <Table.HeadCell>Action </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {response?.data?.payments?.map((value) => {
              return (
                <Table.Row
                  key={value._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <>
                    <Table.Cell>
                      <Checkbox />{" "}
                    </Table.Cell>
                    <Table.Cell>{value?.client?.userType}</Table.Cell>
                    <Table.Cell>
                      {value?.client?.fullName ||
                        value?.client?.firstName +
                          " " +
                          value?.client?.lastName}
                    </Table.Cell>
                    <Table.Cell>{value?.amount}</Table.Cell>
                    <Table.Cell>{formatDate(value?.createdAt)}</Table.Cell>{" "}
                    <Table.Cell>
                      <CustomBadge
                        text={
                          accepted.includes(value._id)
                            ? "completed"
                            : rejected.includes(value._id)
                            ? "failed"
                            : value?.status
                        }
                        type={
                          accepted.includes(value._id)
                            ? "success"
                            : rejected.includes(value._id)
                            ? "error"
                            : value?.status == "pending"
                            ? "info"
                            : value?.status == "refunded"
                            ? "warning"
                            : value?.status == "completed"
                            ? "success"
                            : value?.status == "failed"
                            ? "error"
                            : "warning"
                        }
                      />
                    </Table.Cell>
                    <Table.Cell>--</Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-start items-center gap-3">
                        <HiOutlineEye
                          color="#000000"
                          className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                          onClick={() => {
                            if (value.client.bank) {
                              setopen(true);
                              setBank(value?.client?.bank);
                            } else {
                              toastMessage(
                                "User has no bank in the database !",
                                "error"
                              );
                            }
                          }}
                        />
                        <GiCancel
                          onClick={() => {
                            reject(value._id);
                          }}
                          color="#FF3636"
                          className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        />
                        <FaRegCheckCircle
                          onClick={() => {
                            accept(value._id);
                          }}
                          color="#069803"
                          className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        />
                      </div>
                    </Table.Cell>
                  </>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Payouttable;
