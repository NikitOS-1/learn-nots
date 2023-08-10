import "./Dashboard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { data } from "./data";
import { useState } from "react";
import Paginations from "./Pagination/Pagination";
import Item from "./Item/Item";
import Modal from "../../Components/Modal/Modal";
import ModalProfileLink from "./ModalForItem/ModalProfileLink";
import ModalMessage from "./ModalForItem/ModalMessage";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [modalProfileLink, setModalProfileLink] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  const openModal = (fn) => {
    fn(true);
  };

  const closeModal = () => {
    setModalProfileLink(false);
    setModalMessage(false);
  };

  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>
              <span>
                Scraping Date <FilterAltIcon style={{ marginLeft: "10px" }} />
              </span>
            </th>
            <th>Link to the post</th>
            <th>
              <span>
                Link to the Group
                <FilterAltIcon style={{ marginLeft: "10px" }} />
              </span>
            </th>
            <th>Profile link</th>
            <th>Message</th>
            <th>
              <span>
                AI status
                <FilterAltIcon style={{ marginLeft: "10px" }} />
              </span>
            </th>
            <th>
              <span>
                User iteraction
                <FilterAltIcon style={{ marginLeft: "10px" }} />
              </span>
            </th>
            <th>
              <span>
                Post Builder
                <FilterAltIcon style={{ marginLeft: "10px" }} />
              </span>
            </th>
            <th>
              <span>
                Post status
                <FilterAltIcon style={{ marginLeft: "10px" }} />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((i) => (
              <Item
                item={i}
                key={i.id}
                openModal={openModal}
                setModalProfileLink={setModalProfileLink}
                setModalMessage={setModalMessage}
              />
            ))}
        </tbody>
      </table>
      <Paginations
        totalPages={totalPages}
        page={page}
        handleChangePage={handleChangePage}
      />
      {modalProfileLink && <ModalProfileLink closeModal={closeModal} />}
      {modalMessage && <ModalMessage closeModal={closeModal} />}
    </div>
  );
};
export default Dashboard;
