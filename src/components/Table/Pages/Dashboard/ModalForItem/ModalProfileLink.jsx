import Modal from "../../../Components/Modal/Modal";

const ModalProfileLink = (closeModal) => {
  return (
    <Modal closeModal={closeModal}>
      <p>
        <b>Clien ID:</b>
      </p>
      <div
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: "whitesmoke",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        Some Picture
      </div>
    </Modal>
  );
};
export default ModalProfileLink;
