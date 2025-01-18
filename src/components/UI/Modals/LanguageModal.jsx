import { Modal } from "flowbite-react";
import React, { useState } from "react";
import CustomInput from "../Inputs/CustomInput";
import Button from "../../button/Button";
import RadioButton from "../Inputs/RadioButton";

function LanguageModal({ openModal, setOpenModal }) {
  const [selectedValue, setSelectedValue] = useState("English");

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div>
      <Modal
        size={"md"}
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="border-none">
          <span className="text-2xl font-bold text-secondary">
            Select Langauge
          </span>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="flex flex-col gap-4">
            <RadioButton
              label="English"
              name="English"
              value="English"
              checked={selectedValue === "English"}
              onChange={handleRadioChange}
            />
            <RadioButton
              label="Arabic"
              name="Arabic"
              value="Arabic"
              checked={selectedValue === "Arabic"}
              onChange={handleRadioChange}
            />
          </form>
        </Modal.Body>
        <Modal.Footer className="flex border-none py-5 justify-center items-center px-0">
          <Button
            onclick={() => setOpenModal(false)}
            outline
            title="Cancel"
            className="px-10"
          />
          <Button title="Add" className="px-14" />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LanguageModal;
