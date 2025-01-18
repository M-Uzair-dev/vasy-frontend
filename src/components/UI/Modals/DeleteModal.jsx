import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DeleteModal({
  setDeleteModal,
  handleDeleteClick,
  deleteText,
  deleteMessage,
  deleteModal,
}) {
  return (
    <Modal
      show={deleteModal}
      size="md"
      onClose={() => setDeleteModal(false)}
      popup
      dismissible
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {deleteMessage || "Are you sure you want to delete ?"}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={handleDeleteClick}>
              {deleteText || "Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={() => setDeleteModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
