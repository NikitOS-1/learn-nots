import { useState } from "react";
import Modal from "../Modal/Modal";

const Item = (item) => {
  const {
    id,
    scraping,
    linkPost,
    linkGroup,
    linkProfile,
    message,
    userIter,
    postBuild,
    postStatus,
  } = item.item;
  const [selectValue, setSelectValue] = useState("yes");
  const [isModalOpenProfileLink, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  const openModal = (fn) => {
    fn(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage(false);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{scraping}</td>
        <td>{linkPost}</td>
        <td>{linkGroup}</td>
        <td>
          <div
            className="linkProfile"
            onClick={() => openModal(setIsModalOpen)}>
            {linkProfile}
          </div>
        </td>
        <td onClick={() => openModal(setModalMessage)}>
          <div className="linkProfile">{message}</div>
        </td>
        <td>
          <select
            value={selectValue}
            onChange={(e) => handleSelectChange(e)}
            style={{ cursor: "pointer" }}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </td>
        <td>{userIter}</td>
        <td>{postBuild}</td>
        <td>{postStatus}</td>
      </tr>
      {isModalOpenProfileLink && (
        <Modal closeModal={closeModal}>
          <p>
            <b>Clien ID:</b> {id}
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
      )}
      {modalMessage && (
        <Modal closeModal={closeModal}>
          <textarea
            name=""
            id=""
            cols="60"
            rows="20"
            value={
              "Thank God for those extra years transplants give you some of the best extra years you’ve ever had in your life thank you to all of the donors so sorry for your loss"
            }></textarea>
        </Modal>
      )}
    </>
  );
};
export default Item;
