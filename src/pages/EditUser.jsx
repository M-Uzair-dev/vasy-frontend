import React, { useEffect, useState } from "react";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import DashBoardLayout from "../layout/DashBoardLayout";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { api } from "../api/useAxios";
import uploadImage from "../api/uploadImage";

const EditUser = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedImages, setselectedImages] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    image: "",
    lastName: "",
    mobileNumber: "",
    email: "",
  });
  const [uploading, setUploading] = useState(false);
  const { userId: id } = useParams();
  const navigate = useNavigate();
  const getUserInfo = async () => {
    try {
      if (!id) {
        toastMessage("User not found !", "error");
        navigate("/");
      }
      const response = await api.get(`/client/single?id=${id}`);
      if (response.status == 200) {
        setUserInfo({
          firstName: response.data.firstName,
          image: response.data.image,
          lastName: response.data.lastName,
          mobileNumber: response.data.mobileNumber,
          email: response.data.email,
        });
        setselectedImages([response.data.image]);
        setLoading(false);
      } else {
        toastMessage(
          response.data.message || "Something went wrong !",
          "error"
        );
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong !", "error");
      setLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const updateProfile = async () => {
    try {
      if (selectedImages.length == 0) {
        toastMessage("Image is required !", "error");
        setLoading(false);
        return;
      }
      let url;
      if (selectedImages[0] !== userInfo.image) {
        url = await uploadImage(selectedImages[0], setUploading);
        if (!url) {
          toastMessage(
            "Something went wrong while uploading the image !",
            "error"
          );
          return;
        }
      }
      let response;

      if (url) {
        response = await api.put(`/client?id=${id}`, {
          ...userInfo,
          image: url,
        });
      } else {
        response = await api.put(`/client?id=${id}`, userInfo);
      }
      if (response.status == 200) {
        toastMessage("User updated successfully !", "success");
        setLoading(false);
      } else {
        toastMessage(
          response.data.message || "Something went wrong !",
          "error"
        );
        setLoading(false);
      }
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong !", "error");
      setLoading(false);
    }
  };
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout heading={"User Details"}>
      <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"First Name"}
            placeholder="Enter Name"
            name="firstName"
            value={userInfo?.firstName || ""}
            onChange={(event) => {
              setUserInfo({ ...userInfo, firstName: event.target.value });
            }}
          />
          <CustomInput
            label={"Last Name"}
            placeholder="Enter Name"
            name="lastName"
            value={userInfo?.lastName || ""}
            onChange={() => {
              setUserInfo({ ...userInfo, lastName: event.target.value });
            }}
          />
          <CustomInput
            label={"Email"}
            placeholder="Enter Email"
            name="email"
            value={userInfo?.email || ""}
            onChange={() => {
              setUserInfo({ ...userInfo, email: event.target.value });
            }}
          />
        </div>
        <div className="flex justify-start w-[66%] gap-5">
          {/* <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Country Code"}
            placeholder="Select Country Code"
          /> */}{" "}
          <CustomInput
            label={"Phone no "}
            placeholder="Enter Phone no"
            name="mobileNumber"
            value={userInfo?.mobileNumber || ""}
            onChange={() => {
              setUserInfo({ ...userInfo, mobileNumber: event.target.value });
            }}
          />
          <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
            maxImages={1}
          />
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button
            title={
              uploading ? "Uploading image..." : loading ? "Saving..." : "Save"
            }
            onclick={() => {
              if (!loading && !uploading) {
                updateProfile();
              } else {
                toastMessage("loading...");
              }
            }}
          />
        </div>
      </form>
    </DashBoardLayout>
  );
};

export default EditUser;
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
