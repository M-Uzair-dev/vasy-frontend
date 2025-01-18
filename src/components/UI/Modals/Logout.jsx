import { Modal } from "flowbite-react";
import React from "react";
import Button from "../../button/Button";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "../Toast/toastMessage";
import useLocalUser from "../../../hooks/user/useLocalUser";

function Logout({ openModal, setOpenModal }) {
  const nav = useNavigate();
  const user = useLocalUser();
  const handleLogout = () => {
    if (user === "super-admin") {
      nav("/superadmin-login");
    }
    if (user === "resturant") {
      nav("/resturant-login");
    }
    if (user === "admin") {
      nav("/admin-login");
    }
    if (user === "agent") {
      nav("/agent-login");
    }
    nav("/superadmin-login");
    toastMessage("Logout Successfully");
    localStorage.clear();
  };
  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        dismissible
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <BsFillExclamationCircleFill className="mx-auto mb-4 h-20 w-20 text-main dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to Logout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                onclick={() => setOpenModal(false)}
                outline
                title="No"
                className="px-10"
              />
              <Button onclick={handleLogout} title="Yes" className="px-14" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Logout;
