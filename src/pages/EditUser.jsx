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

const EditUser = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selected, setselected] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    image: "",
    lastName: "",
    mobileNumber: "",
    email: "",
  });
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

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    try {
      if (selectedImages.length > 0) {
        setUserInfo({ ...userInfo, image: selectedImages[0] });
      }
      const response = await api.put(`/client?id=${id}`);
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong !", "error");
      setLoading(false);
      navigate("/");
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
            onChange={handleChange}
          />
          <CustomInput
            label={"Last Name"}
            placeholder="Enter Name"
            name="lastName"
            value={userInfo?.lastName || ""}
            onChange={handleChange}
          />
          <CustomInput
            label={"Email"}
            placeholder="Enter Email"
            name="email"
            value={userInfo?.email || ""}
            onChange={handleChange}
          />
          <CustomInput
            label={"Phone no "}
            placeholder="Enter Phone no"
            name="mobileNumber"
            value={userInfo?.mobileNumber || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-start w-[66%] gap-5">
          <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Country Code"}
            placeholder="Select Country Code"
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
          <Button title="Save" onclick={() => console.log(selectedImages)} />
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
