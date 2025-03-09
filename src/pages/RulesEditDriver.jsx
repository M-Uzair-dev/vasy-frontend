import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { BsDatabaseDash } from "react-icons/bs";
import uploadFile from "../api/uploadImage";
import { api } from "../api/useAxios";

function RulesEditDriver() {
  const [selected, setselected] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({});
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { apiCall, loading, response } = useApi("GET", (data2) => {
    setData(data2.rule);
    setselectedImages([data2.rule.image]);
  });

  useEffect(() => {
    if (!id) {
      nav(-1);
      return;
    }
    apiCall(`/rules?id=${id}`);
  }, [id]);

  const handleSubmit = async () => {
    try {
      let url;

      if (selectedImages[0] !== data.image && selectedImages[0]) {
        url = await uploadFile(selectedImages[0], setUploading);
        if (!url) {
          toastMessage(
            "Something went wrong while uploading the image",
            "error"
          );
          return;
        }
      }

      setUploading(false);
      setSaving(true);
      let response;

      if (url) {
        response = await api.put(`/rules?id=${id}`, { ...data, image: url });
      } else {
        response = await api.put(`/rules?id=${id}`, data);
      }
      if (response.status == 200) {
        toastMessage("Rule updated successfully", "success");
        nav(-1);
      } else {
        toastMessage(response.data.message || "Something went wrong", "error");
      }
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong !", "error");
    } finally {
      setSaving(false);
      setUploading(false);
    }
  };
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }

  return (
    <DashBoardLayout heading={"Edit rule"}>
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
            title={
              uploading ? "Uploading image..." : saving ? "Saving..." : "Save"
            }
            onclick={() => {
              if (!loading && !uploading && !saving) handleSubmit();
            }}
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
