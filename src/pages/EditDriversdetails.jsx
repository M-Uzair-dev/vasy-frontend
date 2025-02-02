import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import useApi from "../api/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { api } from "../api/useAxios";
import uploadFile from "../api/uploadImage";

function EditDriversdetails() {
  const [selected, setselected] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
  const [data, setData] = useState({});
  const [bank, setBank] = useState({});
  const [uploading, setUploading] = useState(false);
  const [noBank, setNoBank] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editing2, setEditing2] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();
  const { apiCall, response, loading } = useApi("GET", (data2) => {
    setData(data2.driver);
    if (data2.bank) {
      setBank(data2.bank);
    } else {
      setNoBank(true);
    }
    setselectedImages([data2.driver.image]);
  });

  useEffect(() => {
    if (id) {
      apiCall(`/driver/${id}`);
    } else {
      toastMessage("Id is required", "error");
      nav(-1);
    }
  }, []);

  const handleEdit = async () => {
    try {
      let url;
      if (selectedImages[0] !== data.image && selectedImages[0]) {
        setUploading(true);
        url = await uploadFile(selectedImages[0], setUploading);
        if (!url) {
          toastMessage(
            "Something went wrong while uploading the image !",
            "error"
          );
          return;
        }
      }
      setEditing(true);
      let answer;
      if (url) {
        answer = await api.put(`/driver?id=${data._id}`, {
          ...data,
          image: url,
        });
      } else {
        answer = await api.put(`/driver?id=${data._id}`, data);
      }
      if (answer.status == 200) {
        if (!noBank && bank) {
          setEditing(false);
          setEditing2(true);

          const answer2 = await api.put(`/bank?id=${bank?._id}`, bank);
          if (answer2.status == 200) {
            setEditing2(false);
            toastMessage("Driver updated successfully !", "success");
            nav(-1);
          } else {
            throw new Error(answer2.data.message);
          }
        } else {
          toastMessage("Driver updated successfully !", "success");
          nav(-1);
        }
      } else {
        throw new Error(answer.data.message);
      }
    } catch (e) {
      console.log(e);
      toastMessage(
        e.data.message || "Something went wrong, Please try again later !",
        "error"
      );
    } finally {
      setEditing(false);
      setEditing2(false);
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout>
      <div className="flex flex-col ">
        <h1 className="text-secondary text-2xl font-bold pb-16">
          Driver Details
        </h1>
        <form action="" className="flex flex-col gap-12 h-[50vh] ">
          <div className="flex justify-start gap-5">
            <CustomInput
              label={"First Name"}
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              placeholder="Enter First Name"
            />
            <CustomInput
              label={"Last Name"}
              placeholder="Enter Last Name"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </div>

          <div className="flex justify-start gap-5">
            <CustomInput
              label={"Email"}
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <CustomInput
              label={"Phone"}
              placeholder="Phone"
              value={data.mobileNumber}
              onChange={(e) =>
                setData({ ...data, mobileNumber: e.target.value })
              }
            />
          </div>
          <div className="flex justify-start gap-5">
            <CustomInput
              label={"CNIC"}
              placeholder="CNIC"
              value={data.CNIC}
              onChange={(e) => setData({ ...data, CNIC: e.target.value })}
            />
            <ImageUploader
              selectedImages={selectedImages}
              setSelectedImages={setselectedImages}
              maxImages={1}
              label={"Image"}
            />
          </div>
        </form>

        <h1 className="text-secondary text-2xl font-bold pb-12">
          Bank Details
        </h1>
        {noBank ? (
          <p>This driver does not have a bank !</p>
        ) : (
          <form action="" className="flex flex-col gap-7 h-[50vh] ">
            <div className="flex justify-start gap-5">
              <CustomInput
                label={"Bank Name"}
                value={bank?.bankName}
                onChange={(e) => setBank({ ...bank, bankName: e.target.value })}
                placeholder="Data"
              />
              <CustomInput
                label={"Branch Name"}
                placeholder="Data"
                value={bank?.branchName}
                onChange={(e) =>
                  setBank({ ...bank, branchName: e.target.value })
                }
              />
              <CustomInput
                label={"Holder Name"}
                placeholder="Data"
                value={bank?.holderName}
                onChange={(e) =>
                  setBank({ ...bank, holderName: e.target.value })
                }
              />
            </div>
            <div className="flex justify-start gap-5 pr-[400px]">
              <CustomInput
                label={"Account number"}
                placeholder="Data"
                value={bank?.accountNumber}
                onChange={(e) =>
                  setBank({ ...bank, accountNumber: e.target.value })
                }
              />
              <CustomInput
                label={"Other information"}
                placeholder="Data"
                value={bank?.otherInfo}
                onChange={(e) =>
                  setBank({ ...bank, otherInfo: e.target.value })
                }
              />
            </div>
          </form>
        )}
        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button
            title={
              uploading
                ? "Uploading image..."
                : editing2
                ? "Saving bank?..."
                : editing
                ? "Saving driver..."
                : "Save"
            }
            onclick={() => {
              if (!editing2 && !editing && !loading) {
                handleEdit();
              }
            }}
          />
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default EditDriversdetails;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
