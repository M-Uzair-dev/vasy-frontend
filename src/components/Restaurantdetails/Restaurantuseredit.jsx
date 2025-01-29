import React, { useEffect, useState } from "react";
import CustomInput from "../UI/Inputs/CustomInput";
import Button from "../../components/button/Button";
import DashBoardLayout from "../../layout/DashBoardLayout";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploader from "../UI/Inputs/ImageInput";
import { toastMessage } from "../UI/Toast/toastMessage";
import { api } from "../../api/useAxios";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";

const Restaurantuseredit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [restaurant, setRestaurant] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [selectedImages2, setselectedImages2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const fetchData = async () => {
    try {
      if (!id) {
        nav("/resturants");
        return;
      }
      setLoading(true);
      const response = await api.get(`/restaurant?id=${id}`);
      if (response.status == 200) {
        setRestaurant({
          fullName: response.data.restaurant.fullName,
          email: response.data.restaurant.email,
          phoneNumber: response.data.restaurant.phoneNumber,
        });
        setselectedImages2([response.data.restaurant.image]);
        setLoading(false);
      } else {
        toastMessage(
          response.data.message || "Something went wrong !",
          "error"
        );
        setLoading(false);
        nav("/resturants");
      }
    } catch (e) {
      console.log(e);
      toastMessage(e.data.message || "Something went wrong !", "error");
      setLoading(false);
      nav("/resturants");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const editUser = async () => {
    try {
      if (!id) {
        nav("/resturants");
        return;
      }
      setEditing(true);
      const response = await api.put(`/restaurant?id=${id}`, restaurant);
      if (response.status == 200) {
        toastMessage("User updated successfully !", "success");
        setEditing(false);
      } else {
        toastMessage(
          response.data.message || "Something went wrong !",
          "error"
        );
        setEditing(false);
        nav("/resturants");
      }
    } catch (e) {
      console.log(e);
      toastMessage(e.data.message || "Something went wrong !", "error");
      setEditing(false);
      nav("/resturants");
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout heading={"Edit Details"}>
      <form action="" className="flex flex-col  gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Name"}
            placeholder="Enter Name"
            value={restaurant.fullName}
            onChange={(e) =>
              setRestaurant({ ...restaurant, fullName: e.target.value })
            }
          />
          <CustomInput
            label={"Email"}
            placeholder="Enter Email"
            value={restaurant.email}
            onChange={(e) =>
              setRestaurant({ ...restaurant, email: e.target.value })
            }
          />
        </div>
        <div className="flex justify-start gap-5 mr-[400px]">
          <CustomInput
            label={"Phone"}
            placeholder="Enter Phone number"
            value={restaurant.phoneNumber}
            onChange={(e) =>
              setRestaurant({ ...restaurant, phoneNumber: e.target.value })
            }
          />
          <ImageUploader
            selectedImages={selectedImages2}
            setSelectedImages={setselectedImages2}
            label={"Restaurant Cover Photo"}
            maxImages={1}
          />
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button
            title={editing ? "Saving..." : "Save"}
            onclick={() => {
              if (!loading && !editing) {
                editUser();
              }
            }}
          />
        </div>
      </form>
    </DashBoardLayout>
  );
};

export default Restaurantuseredit;
