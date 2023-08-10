import { useState } from "react";

const Item = (item, openModal, setModalProfileLink, setModalMessage) => {
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
            onClick={() => item.openModal(item.setModalProfileLink)}>
            {linkProfile}
          </div>
        </td>
        <td onClick={() => item.openModal(item.setModalMessage)}>
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
    </>
  );
};
export default Item;
