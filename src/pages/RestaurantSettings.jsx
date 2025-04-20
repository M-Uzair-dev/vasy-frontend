import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import Button from "../components/button/Button";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import uploadFile from "../api/uploadImage";
function RestaurantSettings() {
  const [selectedImages, setselectedImages] = useState([]);
  const [selectedImages2, setselectedImages2] = useState([]);
  const userId = localStorage.getItem("userId");
  const nav = useNavigate();
  const { apiCall: updateUser, loading: loading2, response } = useApi("PUT");
  const [uploading, setUploading] = useState(false);
  const { apiCall: getUser, loading } = useApi("GET", (data) => {
    console.log(data);
    setUser({
      name: data.name,
      email: data.email,
      phone: data.phone,
      logo: data.image,
      cover: data.cover,
    });
    setselectedImages(data.image ? [data.image] : []);
    setselectedImages2(data.cover ? [data.cover] : []);
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    logo: "",
    cover: "",
  });
  useEffect(() => {
    getUser(`/auth/user-details`);
  }, []);
  const updateUserDetails = async () => {
    if (user.password) {
      if (!user.newPassword) {
        toastMessage("New password is required", "error");
        return;
      } else if (user.confirmPassword !== user.newPassword) {
        toastMessage("New password and confirm password do not match", "error");
        return;
      }
    }

    let updatedUser = { ...user };

    if (selectedImages[0] && selectedImages[0] !== user.logo) {
      const url = await uploadFile(selectedImages[0], setUploading);
      updatedUser.logo = url;
    }
    if (selectedImages2[0] && selectedImages2[0] !== user.cover) {
      const url = await uploadFile(selectedImages2[0], setUploading);
      updatedUser.cover = url;
    }

    setUser(updatedUser);

    const response = await updateUser(`/auth/update-user`, {
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      password: updatedUser.password,
      newPassword: updatedUser.newPassword,
      confirmPassword: updatedUser.confirmPassword,
      logo: updatedUser.logo,
      cover: updatedUser.cover,
    });
    if (response?.status === 200) {
      toastMessage("User details updated successfully", "success");
    } else if (response?.status === 202) {
      toastMessage(response.message || "Wrong Password !", "error");
    } else {
      toastMessage(response.message || "User details update failed", "error");
    }
  };
  if (loading || loading2) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <>
      <DashBoardLayout heading={"General Settings"}>
        <form action="" className="flex flex-col gap-16 h-[60vh]">
          <div className="flex justify-start gap-5">
            <CustomInput
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              label={"Name"}
              placeholder="Enter Name"
            />
            <CustomInput
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              label={"Email"}
              placeholder="Enter Email"
            />
            <CustomInput
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              label={"Phone"}
              placeholder="Enter Phone"
            />
          </div>
          <div className="flex justify-start gap-5">
            <ImageUploader
              selectedImages={selectedImages}
              setSelectedImages={setselectedImages}
              label={"Restaurant logo"}
              maxImages={1}
            />
            <ImageUploader
              selectedImages={selectedImages2}
              setSelectedImages={setselectedImages2}
              label={"Restaurant cover photo"}
              maxImages={1}
            />
            <div className="w-full invisible"></div>
          </div>
          <h1 className="text-secondary text-2xl font-bold">Change Password</h1>
          <div className="flex justify-start gap-5">
            <CustomInput
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              label={"Current Password"}
              placeholder="Password"
            />
            <CustomInput
              value={user.newPassword}
              onChange={(e) =>
                setUser({ ...user, newPassword: e.target.value })
              }
              label={"New Password"}
              placeholder="Password"
            />
            <CustomInput
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              label={"Confirm Password"}
              placeholder="Password"
            />
          </div>
          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button
              title={uploading ? "Uploading Images..." : "Save"}
              onclick={() => {
                updateUserDetails();
              }}
            />
          </div>
        </form>
      </DashBoardLayout>
    </>
  );
}

export default RestaurantSettings;
