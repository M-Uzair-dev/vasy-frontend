import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import useApi from "../api/useApi";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { api } from "../api/useAxios";
import uploadFile from "../api/uploadImage";
function RidesservicesEdit() {
  const [selectedImages, setselectedImages] = useState([]);
  const nav = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    kmChange: 0,
    commissionType: "",
    peakSurcharge: 0,
    weightLimit: 0,
    tax: 0,
    adminCommission: 0,
    biddingSystem: false,
    image: "",
  });

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { apiCall, response, loading } = useApi("GET", (data2) => {
    setData(data2.service);
    setselectedImages([data2.service.image]);
  });

  useEffect(() => {
    if (id) {
      apiCall(`/services?id=${id}`);
    } else {
      toastMessage("Invalid edit url", "error");
      nav(-1);
    }
  }, []);

  const handleClick = async () => {
    try {
      setSaving(true);

      let url;

      if (selectedImages[0] !== data.image) {
        url = await uploadFile(selectedImages[0], setUploading);
        if (!url) {
          toastMessage(
            "Something went wrong while uploading the image",
            "error"
          );
          return;
        }
      }

      let response;

      if (url) {
        response = await api.put(`/services?id=${id}`, { ...data, image: url });
      } else {
        response = await api.put(`/services?id=${id}`, data);
      }
      if (response.status == 200) {
        toastMessage("Service updated successfully", "success");
        nav(-1);
      } else {
        toastMessage(response.data.message || "Something went wrong", "error");
      }
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout heading={"Edit Service"}>
      <form action="" className="flex flex-col gap-16 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Service Title"}
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Enter Name"
          />
          <CustomInput
            label={"KM Charge"}
            value={data.kmChange}
            onChange={(e) => setData({ ...data, kmChange: e.target.value })}
            placeholder="Charges"
          />
          <CustomInput
            label={"Commission  Type"}
            value={data.commissionType}
            onChange={(e) =>
              setData({ ...data, commissionType: e.target.value })
            }
            placeholder="select "
          />
        </div>
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Peak Surcharge"}
            value={data.peakSurcharge}
            onChange={(e) =>
              setData({ ...data, peakSurcharge: e.target.value })
            }
            placeholder="Surcharge"
          />
          <CustomInput
            label={"Weight Limit"}
            value={data.weightLimit}
            onChange={(e) => setData({ ...data, weightLimit: e.target.value })}
            placeholder="Weightlimit"
          />
          <CustomInput
            label={"Tax"}
            value={data.tax}
            onChange={(e) => setData({ ...data, tax: e.target.value })}
            placeholder="%Tax"
          />
        </div>
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Admin Commission"}
            placeholder="Admin commision"
            value={data.adminCommission}
          />
          <CustomSelect
            selected={data.biddingSystem}
            setselected={(value) => {
              if (value === "true") {
                setData((prev) => {
                  return { ...prev, biddingSystem: true };
                });
              } else {
                setData((prev) => {
                  return { ...prev, biddingSystem: false };
                });
              }
            }}
            options={options}
            label={"Bidding system"}
            placeholder="Select Bidding system"
          />
          <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            maxImages={1}
            label={"Image"}
          />
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button
            title={uploading ? "uploading..." : saving ? "Saving..." : "Save"}
            onclick={() => {
              if (!uploading && !saving) handleClick();
            }}
          />
        </div>
      </form>
      <div className="pb-64"></div>
    </DashBoardLayout>
  );
}

export default RidesservicesEdit;

const options = [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];
