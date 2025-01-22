import React, { useRef, useState } from "react";
import { MdCancel } from "react-icons/md";

const ImageUploader = ({
  label,
  placeholder = "Select Images",
  selectedImages,
  setSelectedImages,
  maxImages = 10,
}) => {
  // const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    if (selectedImages.length == maxImages) return;
    if (selectedImages.length + newImages.length > maxImages) {
      const remainingImages = maxImages - selectedImages.length;
      newImages.splice(remainingImages);
    }
    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
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
        {selectedImages?.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`selected-${index}`}
              className="h-20 w-20 object-cover rounded-md border"
            />
            <MdCancel
              color="#3f83f8"
              onClick={() => removeImage(index)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full hover:scale-110 cursor-pointer duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
