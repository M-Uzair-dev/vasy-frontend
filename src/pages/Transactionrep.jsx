import React, { useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import useApi from "../api/useApi";
import * as XLSX from "xlsx";

function Transactionrep() {
  const [selected, setselected] = useState("");
  const [name, setName] = useState("");
  const { apiCall: getTransactions } = useApi("GET");

  let downloadFile = async () => {
    try {
      let response = await getTransactions(`/transactions`);
      const data = response.data;
      console.log(data);
      const updatedData = data.map((item) => {
        return {
          ID: item._id,
          TaxId: item.taxId,
          ClientName:
            item.client?.firstName || "N/A" + " " + item.client?.lastName || "",
          ClientEmail: item.client?.email || "N/A",
          ClientPhone: item.client?.mobileNumber || "N/A",
          Amount: item.amount,
          Method: item.method,
          Note: item.note,
          createdAt: item.createdAt.split("T")[0],
          updatedAt: item.updatedAt.split("T")[0],
        };
      });
      let workSheet = XLSX.utils.json_to_sheet(updatedData);
      let wbBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wbBook, workSheet, "Transactions");
      XLSX.writeFile(wbBook, `${name || "transactions"}.xlsx`);
    } catch (e) {
      console.error("Error downloading file:", e);
    }
  };

  return (
    <DashBoardLayout heading={"Transaction Reports"}>
      <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label="File name"
            placeholder="Enter File Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/*    <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Status"}
            placeholder="Select Status"
          /> */}
          {/* <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"File Format"}
            placeholder="File Format"
          /> */}
        </div>
        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Download" onclick={downloadFile} />
        </div>
      </form>
    </DashBoardLayout>
  );
}

export default Transactionrep;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
