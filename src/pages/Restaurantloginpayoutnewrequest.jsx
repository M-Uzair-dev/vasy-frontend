import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import useApi from "../api/useApi";
import { toastMessage } from "../components/UI/Toast/toastMessage";
function Restaurantloginpayoutnewrequest() {
  const { apiCall: AddPayout, loading, response } = useApi("POST");
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    branchName: "",
    holderName: "",
    accountNo: "",
    ibanNo: "",
    otherInfo: "",
  });
  const [wallet, setWallet] = useState({
    totalBalance: 0,
  });
  const { apiCall: updateBank, loading: updateBankLoading } = useApi("PUT");
  const { apiCall: getBank, loading: getBankLoading } = useApi(
    "GET",
    (data) => {
      setBankDetails({
        bankName: data.bankName,
        branchName: data.branchName,
        holderName: data.holderName,
        accountNo: data.accountNo,
        ibanNo: data.ibanNo,
        otherInfo: data.otherInfo,
      });
    }
  );
  const { apiCall: getWallet, loading: getWalletLoading } = useApi(
    "GET",
    (data) => {
      console.log(data);
      setWallet({
        totalBalance: data.totalBalance,
      });
    }
  );
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getBank(`/bank?userId=${userId}`);
    getWallet(`/wallet?userId=${userId}`);
  }, []);
  const updateBankDetails = async () => {
    try {
      if (userId) {
        console.log("SENDING :", {
          ...bankDetails,
          userId,
        });
        let response = await updateBank("/bank", {
          ...bankDetails,
          userId,
        });
        console.log(response);
        if (response?.status === 200) {
          toastMessage("Bank details updated successfully", "success");
        } else {
          toastMessage(
            "Something went wrong ! Make sure all fields are properly filled.",
            "error"
          );
        }
      } else {
        toastMessage("User ID not found", "error");
        return;
      }
    } catch (e) {
      console.log(e);
      toastMessage(
        "Something went wrong ! Make sure all fields are properly filled.",
        "error"
      );
    }
  };
  const postPayout = async () => {
    if (!userId) {
      toastMessage("User ID not found", "error");
      return;
    }
    if (amount > wallet.totalBalance) {
      toastMessage("Insufficient balance", "error");
      return;
    }
    let response = await AddPayout("/payment", {
      amount: amount,
      paymentMethod: paymentMethod,
      clientId: userId,
    });
    if (response.status === 201) {
      toastMessage("Payout request sent successfully", "success");
      navigate(-1);
    } else {
      toastMessage(response.message || "Payout request failed", "error");
      navigate(-1);
    }
  };
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <>
      <DashBoardLayout heading={"Request new "}>
        <div className="flex justify-between bg-[#EDF2F7] px-5 py-5 items-center rounded-md">
          <h1 className="text-[#666666] text-xl font-bold">
            Available balance :{" "}
            <span className="text-[#1B3B5F] text-2xl">
              {" "}
              ${wallet.totalBalance}
            </span>
          </h1>
          <div className="flex justify-end items-center">
            <Button
              onclick={() => {
                postPayout();
              }}
              title="Send request "
              className="px-7"
            />
          </div>
        </div>

        <div></div>

        <form action="" className="flex flex-col gap-16  pt-4">
          <h1 className="text-secondary text-2xl font-bold">Request Details</h1>
          <div className="flex justify-start gap-2">
            <CustomInput
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              label={"Amount "}
              placeholder="Amount"
            />
            <CustomSelect
              selected={paymentMethod}
              setselected={setPaymentMethod}
              label={"Payment Method "}
              placeholder="Payment Method"
              options={[
                {
                  label: "Credit",
                  value: "credit",
                },
                {
                  label: "Debit",
                  value: "debit",
                },
                {
                  label: "Cash",
                  value: "cash",
                },
                {
                  label: "Wallet",
                  value: "wallet",
                },
              ]}
            />
          </div>
          <h1 className="text-secondary text-2xl font-bold">Bank Details</h1>
          <div className="flex justify-start gap-5">
            <CustomInput
              value={bankDetails.bankName}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, bankName: e.target.value })
              }
              label={"Bank name "}
              placeholder="Bank name"
            />
            <CustomInput
              value={bankDetails.branchName}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, branchName: e.target.value })
              }
              label={"Branch name "}
              placeholder="Branch name"
            />
            <CustomInput
              value={bankDetails.holderName}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, holderName: e.target.value })
              }
              label={"Holder name "}
              placeholder="Holder name"
            />
          </div>
          <div className="flex justify-start gap-5">
            <CustomInput
              value={bankDetails.accountNo}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, accountNo: e.target.value })
              }
              label={"Account no "}
              placeholder="Account no"
            />
            <CustomInput
              value={bankDetails.ibanNo}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, ibanNo: e.target.value })
              }
              label={"IBAN no "}
              placeholder="IBAN no"
            />
            <CustomInput
              value={bankDetails.otherInfo}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, otherInfo: e.target.value })
              }
              label={"Other info "}
              placeholder="Other info"
            />
          </div>
          <Button
            style={{
              width: "max-content",
              marginLeft: "auto",
            }}
            title="Save Bank Details"
            onclick={() => {
              updateBankDetails();
            }}
          />
        </form>
      </DashBoardLayout>
    </>
  );
}

export default Restaurantloginpayoutnewrequest;
