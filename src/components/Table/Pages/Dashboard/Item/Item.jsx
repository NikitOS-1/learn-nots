import { useState } from "react";

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

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{scraping}</td>
      <td>{linkPost}</td>
      <td>{linkGroup}</td>
      <td>{linkProfile}</td>
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
  );
};
export default Item;
