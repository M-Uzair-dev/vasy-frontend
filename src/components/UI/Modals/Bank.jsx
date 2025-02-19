import React from "react";
import CustomInput from "../Inputs/CustomInput";
import Button from "../../button/Button";
import { Modal } from "flowbite-react";

function Bank({ openModal, setOpenModal, bank }) {
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
            Bank Details
          </span>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="flex flex-col gap-4">
            <CustomInput
              label={"Bank name"}
              value={bank?.bankName || "empty"}
              placeholder="ICIC Bank"
            />
            <CustomInput
              label={"Holder name"}
              value={bank?.holderName || "empty"}
              placeholder="Alex"
            />
            <CustomInput
              label={"Account number"}
              value={bank?.accountNo || "empty"}
              placeholder="121221"
            />
            <CustomInput
              label={"IBAN"}
              value={bank?.ibanNo || "empty"}
              placeholder="IBAN"
            />
            <CustomInput
              label={"Others"}
              value={bank?.otherInfo || "empty"}
              placeholder="Others"
            />
          </form>
        </Modal.Body>
        <Modal.Footer className="flex border-none py-5 justify-center items-center px-0">
          <Button
            onclick={() => setOpenModal(false)}
            outline
            title="Close"
            className="px-10"
          />
          <Button title="Save" className="px-14" />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Bank;
