import React, { useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import uploadFile from "../../../api/uploadImage";

const ImageUploader = ({
  label,
  placeholder = "Select Images",
  selectedImages,
  setSelectedImages,
  maxImages = 10,
  isRestaurant = false,
  disabled = false,
}) => {
  // const [selectedImages, setSelectedImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const handleImageChange = async (e) => {
    if (isRestaurant) {
      const url = await uploadFile(e.target.files[0], setUploading);
      setSelectedImages(url);
    } else {
      const files = Array.from(e.target.files);
      console.log(files);
      const newImages = files;
      if (selectedImages?.length == maxImages) return;
      if (selectedImages?.length + newImages.length > maxImages) {
        const remainingImages = maxImages - selectedImages?.length;
        newImages.splice(remainingImages);
      }
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (indexToRemove) => {
    if (isRestaurant) {
      setSelectedImages(null);
    } else {
      setSelectedImages((prevImages) =>
        prevImages.filter((_, index) => index !== indexToRemove)
      );
    }
  };
  const handleClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };
  return (
    <div className="w-full">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef} // Attach the reference to the input
        className="hidden"
        disabled={disabled}
      />
      {/* Change this button */}

      <label className="block mb-2 font-medium text-[#737373] text-xs">
        {label}
      </label>
      <button
        type="button"
        onClick={handleClick} // Call the handleClick function on button click
        className="border border-[#EDF2F7] text-lightGray font-medium outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 text-start"
      >
        {placeholder}
      </button>

      <div className="mt-4 flex flex-wrap gap-4">
        {uploading ? (
          <p>Uploading...</p>
        ) : (
          selectedImages?.map((image, index) => (
            <div key={index} className="relative">
              <img
                onClick={() => {
                  console.log(typeof image);
                }}
                src={
                  typeof image == "object" && !isRestaurant
                    ? URL.createObjectURL(image)
                    : image
                }
                alt={`selected-${index}`}
                className="h-20 w-20 object-cover rounded-md border"
              />
              {!disabled && (
                <MdCancel
                  color="#3f83f8"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full hover:scale-110 cursor-pointer duration-200"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
