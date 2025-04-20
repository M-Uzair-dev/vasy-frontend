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

function RestaurantCategoriesedit() {
  const [selectedImages, setselectedImages] = useState([]);
  const nav = useNavigate();
  const [data, setData] = useState({
    name: "",
    dishes: [{ name: "", price: 1, image: "" }],
  });
  const userID = localStorage.getItem("userId");
  const { apiCall: updateCategory, loading: updateLoading } = useApi(
    "POST",
    (data) => {
      console.log(data);
    }
  );

  const handleUpdate = async () => {
    if (userID) {
      const res = await updateCategory(`/category`, {
        ...data,
        restaurantId: userID,
      });
      if (res.status === 201) {
        toastMessage("Category created successfully", "success");
        nav(-1);
      } else {
        toastMessage("Failed to create category", "error");
      }
    } else {
      toastMessage("User not found", "error");
      nav("/");
    }
  };

  if (updateLoading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }

  return (
    <DashBoardLayout heading={"Edit Category Details"}>
      <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className="w-[390px]">
          <CustomInput
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            label={"Category Name"}
            placeholder=" Category name"
          />
        </div>
        {data?.dishes?.map((dish, index) => (
          <div className="flex justify-start gap-5 mr-96">
            <CustomInput
              value={dish.name}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  dishes: prev.dishes.map((dish, i) =>
                    i === index ? { ...dish, name: e.target.value } : dish
                  ),
                }))
              }
              label={"Dish" + `${index + 1}`}
              placeholder="Name"
            />
            <CustomInput
              value={dish.price}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  dishes: prev.dishes.map((dish, i) =>
                    i === index ? { ...dish, price: e.target.value } : dish
                  ),
                }))
              }
              type="number"
              label={"Price"}
              placeholder="Price"
            />
            <ImageUploader
              selectedImages={dish.image ? [dish.image] : []}
              setSelectedImages={(url) => {
                setData((prev) => ({
                  ...prev,
                  dishes: prev.dishes.map((dish, i) =>
                    i === index ? { ...dish, image: url } : dish
                  ),
                }));
              }}
              label={"Image"}
              maxImages={1}
              isRestaurant={true}
            />
            <Button
              title="Remove"
              style={{ height: "40px", marginTop: "22px" }}
              onclick={() => {
                setData((prev) => ({
                  ...prev,
                  dishes: prev.dishes.filter((_, i) => i !== index),
                }));
              }}
            />
          </div>
        ))}
        <Button
          title="Add Dish"
          style={{ height: "40px", marginTop: "22px", width: "max-content" }}
          onclick={() => {
            setData((prev) => ({
              ...prev,
              dishes: [...prev.dishes, { name: "", price: 1, image: "" }],
            }));
          }}
        />

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button title="Save" onclick={handleUpdate} />
        </div>
      </form>
      <div className="mb-44"></div>
    </DashBoardLayout>
  );
}

export default RestaurantCategoriesedit;
