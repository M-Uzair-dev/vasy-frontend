import { Modal } from "flowbite-react";
import { useState } from "react";
import Button from "../../button/Button";
import CustomInput from "../Inputs/CustomInput";

function AddAmountModal({ openModal, setOpenModal }) {
  return (
    <Modal
      size={"md"}
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="border-none">
        <span className="text-2xl font-bold text-secondary">
          Add Wallet Amount
        </span>
      </Modal.Header>
      <Modal.Body>
        <form action="" className="flex flex-col gap-4">
          <CustomInput label={"Amount"} placeholder="Enter Amount" />
          <CustomInput label={"Note"} placeholder="Enter Note" />
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
  );
}
export default AddAmountModal;
