import { Modal } from "flowbite-react";
import { useState } from "react";
import Button from "../../button/Button";
import CustomInput from "../Inputs/CustomInput";
import { api } from "../../../api/useAxios";
import { toastMessage } from "../Toast/toastMessage";

function AddAmountModal({ openModal, setOpenModal, user, id }) {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      if (amount < 1) {
        toastMessage("Amount must be greater than 0", "error");
        return;
      }
      setLoading(true);
      const tID = Math.floor(Math.random() * 1000000);
      console.log(id, typeof id);
      const answer = await api.post("/transactions", {
        method: "cash",
        TxnId: tID,
        note: message || "--",
        amount,
        client: id,
      });
      if (answer.status == 201) {
        toastMessage(
          "Transaction Added soccessfully, please refresh for changes.",
          "success"
        );
        setLoading(false);
        setOpenModal(false);
      } else {
        toastMessage(answer.data.message, "error");
        setLoading(false);
      }
    } catch (e) {
      toastMessage(e.data.message, "error");
      setLoading(false);
    }
  };
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
          <CustomInput
            label={"Amount"}
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <CustomInput
            label={"Note"}
            placeholder="Enter Note"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
        <Button
          title={loading ? "loading..." : "Add"}
          onclick={() => {
            if (!loading) {
              handleClick();
            }
          }}
          className="px-14"
        />
      </Modal.Footer>
    </Modal>
  );
}
export default AddAmountModal;
