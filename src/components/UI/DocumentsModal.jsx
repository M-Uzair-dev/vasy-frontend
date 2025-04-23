import React from "react";
import { X } from "lucide-react";

const DocumentsModal = ({ isOpen, onClose, documents }) => {
  if (!isOpen) return null;

  // Function to open image in new tab
  const openImageInNewTab = (imageUrl) => {
    if (imageUrl) {
      window.open(imageUrl, "_blank");
    }
  };

  // Document categories with their labels
  const documentCategories = [
    { key: "idCardFront", label: "ID Card (Front)" },
    { key: "idCardBack", label: "ID Card (Back)" },
    { key: "drivingLicense", label: "Driving License" },
    { key: "vehicleInsurance", label: "Vehicle Insurance" },
    { key: "vehiclePhotos", label: "Vehicle Photos", isArray: true },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with low brightness */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-white rounded-lg w-11/12 max-w-5xl h-4/5 overflow-y-auto p-6 z-10">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Driver Documents</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Documents gallery */}
        <div className="space-y-8">
          {documentCategories.map((category) => (
            <div key={category.key} className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                {category.label}
              </h3>

              {category.isArray ? (
                // Handle array of photos
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {documents[category.key]?.length > 0 ? (
                    documents[category.key].map((photoUrl, index) => (
                      <div
                        key={index}
                        onClick={() => openImageInNewTab(photoUrl)}
                        className="cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <div className="h-48 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={photoUrl}
                            alt={`Vehicle Photo ${index + 1}`}
                            className="w-full h-full object-cover"
                            title={photoUrl}
                            onError={(e) => {
                              e.target.src =
                                "https://via.placeholder.com/400x300?text=Image+Not+Available";
                              e.target.alt = "Image Not Available";
                            }}
                          />
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">
                          Vehicle Photo {index + 1}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full flex items-center justify-center h-48 bg-gray-100 rounded-lg">
                      <p className="text-gray-500">
                        No vehicle photos provided
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                // Handle single document
                <div onClick={() => openImageInNewTab(documents[category.key])}>
                  {documents[category.key] ? (
                    <div className="cursor-pointer hover:opacity-90 transition-opacity">
                      <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={documents[category.key]}
                          alt={category.label}
                          className="w-full h-full object-contain"
                          title={documents[category.key]}
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/400x300?text=Image+Not+Available";
                            e.target.alt = "Image Not Available";
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                      <p className="text-gray-500">
                        No {category.label.toLowerCase()} provided
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsModal;
