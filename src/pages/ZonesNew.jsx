import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";

function ZonesNew() {
  const nav = useNavigate();
  const [zones, setZones] = useState([{ location: "", availability: "yes" }]);
  const [loading, setLoading] = useState("");
  const userID = localStorage.getItem("userId");
  const handleSubmit = async () => {
    try {
      setLoading("validating...");
      for (let index = 0; index < zones.length; index++) {
        const item = zones[index];
        if (!item.location) {
          toastMessage(
            `Please enter location of the zone number ${index + 1}`,
            "error"
          );
          setLoading(false);
          return;
        }
      }
      if (zones.length == 1) {
        setLoading("Saving...");
        const answer = await api.post("/zone", { ...zones[0], admin: userID });
        if (answer.status == 201) {
          toastMessage("Zone created successfully !", "success");
          nav(-1);
        }
      } else {
        setLoading("Saving...");
        const answer = await api.post("/zone/all", { zones, admin: userID });
        if (answer.status == 201) {
          toastMessage("Zones created successfully !", "success");
          nav(-1);
        }
      }
    } catch (e) {
      console.log(e);
      toastMessage("Something went wrong!", "error");
    } finally {
      setLoading("");
    }
  };

  return (
    <div>
      <DashBoardLayout heading={"New Zones"}>
        <form action="" className="flex flex-col gap-7 h-[60vh] ">
          {zones.map((item, index) => {
            return (
              <div
                className="flex justify-start  items-center gap-4"
                key={index}
              >
                <CustomInput
                  label={"Location"}
                  placeholder="Enter location of the zone"
                  value={item.location}
                  onChange={(e) => {
                    setZones((prev) => {
                      return prev.map((item, index2) => {
                        if (index2 == index) {
                          return { ...item, location: e.target.value };
                        }
                        return item;
                      });
                    });
                  }}
                />
                <CustomSelect
                  selected={item.availability}
                  setselected={(option) => {
                    if (!option) {
                      setZones((prev) => {
                        return prev.map((item, index2) => {
                          if (index2 == index) {
                            return { ...item, availability: "no" };
                          }
                          return item;
                        });
                      });
                    } else {
                      setZones((prev) => {
                        return prev.map((item, index2) => {
                          if (index2 == index) {
                            return { ...item, availability: option };
                          }
                          return item;
                        });
                      });
                    }
                  }}
                  options={options}
                  label={"Availability"}
                  placeholder={"Select Availability"}
                />

                <Button
                  title="Addmore"
                  outline
                  style={index !== zones.length - 1 ? { opacity: "0" } : {}}
                  className=" h-10 text-sm  text-center mt-5"
                  onclick={() => {
                    if (index == zones.length - 1) {
                      setZones((prev) => [
                        ...prev,
                        { location: "", availability: "yes" },
                      ]);
                    }
                  }}
                />
              </div>
            );
          })}

          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button
              title={loading ? loading : "Save"}
              onclick={() => {
                if (!loading) {
                  handleSubmit();
                }
              }}
            />
          </div>
        </form>
      </DashBoardLayout>
    </div>
  );
}

export default ZonesNew;
const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
