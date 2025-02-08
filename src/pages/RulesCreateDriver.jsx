import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import uploadFile from "../api/uploadImage";
import { api } from "../api/useAxios";

function RulesEditDriver() {
  const [selected, setselected] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
  const nav = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    status: "active",
    name: "",
  });

  const handleSubmit = async () => {
    try {
      let url;

      if (selectedImages[0]) {
        url = await uploadFile(selectedImages[0], setUploading);
        if (!url) {
          toastMessage(
            "Something went wrong while uploading the image",
            "error"
          );
          return;
        }
      } else {
        toastMessage("Image is required", "error");
        return;
      }

      setUploading(false);
      setSaving(true);
      let response;

      if (url) {
        response = await api.post(`/rules`, { ...data, image: url });
        console.log(response);
      } else {
        toastMessage("Something went wrong while uploading the image", "error");
        return;
      }
      if (response.status == 201) {
        toastMessage("Rule added successfully", "success");
        nav(-1);
      } else {
        toastMessage(response.data.message || "Something went wrong", "error");
      }
    } catch (e) {
      console.log(e);
      toastMessage(
        e.response.data.message || "Something went wrong !",
        "error"
      );
    } finally {
      setUploading(false);
      setSaving(false);
    }
  };
  return (
    <DashBoardLayout heading={"Add new Rules"}>
      <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Name"}
            value={data?.name}
            onChange={(e) => {
              setData((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              });
            }}
            placeholder=" Name"
          />
          <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
            maxImages={1}
          />
        </div>
        <div className="w-[580px]">
          <CustomSelect
            selected={data?.status}
            setselected={(value) => {
              if (value == "") {
                setData((prev) => {
                  return {
                    ...prev,
                    status: "inactive",
                  };
                });
                return;
              }
              setData((prev) => {
                return {
                  ...prev,
                  status: value,
                };
              });
            }}
            options={options}
            label={"Status"}
            placeholder="Select rule status"
          />
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button
            title={uploading ? "Uploading..." : saving ? "Saving..." : "Save"}
            onclick={handleSubmit}
          />
        </div>
      </form>
    </DashBoardLayout>
  );
}

export default RulesEditDriver;

const options = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];
