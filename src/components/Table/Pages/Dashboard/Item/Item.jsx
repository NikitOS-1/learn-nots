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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <td style={{ backgroundColor: "green" }} onClick={openModal}>
          {linkProfile}
        </td>
        <td>{message}</td>
        <td>
          <select value={selectValue} onChange={(e) => handleSelectChange(e)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </td>
        <td>{userIter}</td>
        <td>{postBuild}</td>
        <td>{postStatus}</td>
      </tr>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <p>{id}</p>
        </Modal>
      )}
    </>
  );
};
export default Item;
