import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import uploadFile from "../api/uploadImage";

function ZonesEdit() {
  const nav = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState({});
  const [editing, setEditing] = useState(false);
  const userId = localStorage.getItem("userId");

  const handleSubmit = async () => {
    try {
      if (editing) return;
      if (uploading) return;
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
      setEditing(true);
      if (url) {
        await api.post(`/notification`, { ...data, image: url, userId });
      } else {
        toastMessage("Something went wrong with the image.", "error");
        return;
      }
      toastMessage("Notification Added successfully !", "success");
      nav(-1);
    } catch (e) {
      console.log(e);
      toastMessage("Something went wrong !", "error");
    } finally {
      setEditing(false);
      setUploading(false);
    }
  };

  return (
    <div>
      <DashBoardLayout heading={"Add a new notification"}>
        <form action="" className="flex flex-col gap-7 h-[60vh] ">
          <div className="flex justify-start  items-center gap-4">
            <CustomInput
              label={"Title"}
              placeholder="Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <CustomInput
              label={"Subtitle"}
              placeholder="Subtitle"
              value={data.subtitle}
              onChange={(e) => setData({ ...data, subtitle: e.target.value })}
            />
            <CustomSelect
              selected={data?.audience}
              setselected={(option) => {
                if (!option) {
                  setData({ ...data, audience: "All" });
                } else {
                  setData({ ...data, audience: option });
                }
              }}
              options={options}
              label={"Availability"}
              placeholder="Select Availability"
            />
          </div>
          <div className="w-96">
            <ImageUploader
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
              label={"Image"}
              maxImages={1}
            />
          </div>

          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button
              title={
                uploading
                  ? "uploading Image..."
                  : editing
                  ? "Saving..."
                  : "Save"
              }
              onclick={handleSubmit}
            />
          </div>
        </form>
      </DashBoardLayout>
    </div>
  );
}

export default ZonesEdit;
const options = [
  { value: "all", label: "All" },
  { value: "drivers", label: "Drivers" },
  { value: "users", label: "Users" },
  { value: "restaurants", label: "Restaurants" },
];
