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
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    dishes: [],
  });
  const { apiCall: updateCategory, loading: updateLoading } = useApi(
    "PUT",
    (data) => {
      console.log(data);
    }
  );
  const {
    apiCall: loadCategory,
    loading,
    response,
  } = useApi("GET", (data) => {
    console.log(data);
    setData({
      name: data.category.name,
      dishes: data.category.dishes,
    });
  });
  useEffect(() => {
    loadCategory(`/category?id=${id}`);
  }, [id]);

  const handleUpdate = async () => {
    const res = await updateCategory(`/category?id=${id}`, data);
    if (res.status === 200) {
      toastMessage("Category updated successfully", "success");
      nav(-1);
    } else {
      toastMessage("Failed to update category", "error");
    }
  };

  if (loading || updateLoading) {
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
