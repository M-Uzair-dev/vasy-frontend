import React, { useState, useEffect } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import useApi from "../api/useApi";
import { toastMessage } from "../components/UI/Toast/toastMessage";

function Settingsadmin() {
  const nav = useNavigate();

  const { apiCall: updateUser, loading, error } = useApi("PUT");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
  });

  const { apiCall: getUserDetails } = useApi("GET", (data) => {
    if (data) {
      const { name, email } = data;
      setFormData((prev) => ({
        ...prev,
        name: name || "Empty",
        email: email || "",
      }));
    }
  });

  useEffect(() => {
    getUserDetails("/auth/user-details");
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUser("/auth/update-user", formData);
      if (response) {
        toastMessage("Profile updated successfully", "success");
        setFormData((prev) => ({
          ...prev,
          password: "",
          newPassword: "",
        }));
      }
    } catch (error) {
      toastMessage(
        error.response?.data?.message || "Failed to update profile",
        "error"
      );
    }
  };
  useEffect(() => {
    if (error) {
      toastMessage(
        error.response?.data?.message || "Failed to update profile",
        "error"
      );
    }
  }, [error]);
  return (
    <>
      <DashBoardLayout heading={"Admin Settings"}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-16 h-[60vh]">
          <div className="flex justify-start gap-5">
            <CustomInput
              label={"Name"}
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <CustomInput
              label={"Email"}
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <h1 className="text-secondary text-2xl font-bold">Change Password</h1>
          <div className="flex justify-start gap-5">
            <CustomInput
              label={"Current Password"}
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <CustomInput
              label={"New Password"}
              placeholder="Password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button
              title={loading ? "Saving..." : "Save"}
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </DashBoardLayout>
    </>
  );
}

export default Settingsadmin;
