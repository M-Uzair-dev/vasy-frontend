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

  //   const { apiCall, response, loading } = useApi("GET", (data2) => {
  //     setData(data2.service);
  //     setselectedImages([data2.service.image]);
  //   });

  //   useEffect(() => {
  //     if (id) {
  //       apiCall(`/services?id=${id}`);
  //     } else {
  //       toastMessage("Invalid edit url", "error");
  //       nav(-1);
  //     }
  //   }, []);

  const handleClick = async () => {
    try {
      setSaving(true);

      let url;

      if (selectedImages[0] !== data.image && data.image !== "") {
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
        response = await api.post(`/services`, { ...data, image: url });
      } else {
        response = await api.post(`/services`, {
          ...data,
          image:
            "data:image/png;base64,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",
        });
      }
      if (response.status == 201) {
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

  return (
    <DashBoardLayout heading={"Add services"}>
      <form action="" className="flex flex-col gap-16 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Service Title"}
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Enter Title"
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
            placeholder="Enter Commission Type"
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
            label={"Tax %"}
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
            onChange={(e) =>
              setData({ ...data, adminCommission: e.target.value })
            }
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
            title={
              uploading ? "uploading..." : saving ? "Creating..." : "Create"
            }
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
