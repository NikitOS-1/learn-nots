import "./Dashboard.css";
import { data } from "./data";
import { useState } from "react";
import Paginations from "./Pagination/Pagination";
import Item from "./Item/Item";
import ModalProfileLink from "./ModalForItem/ModalProfileLink";
import ModalMessage from "./ModalForItem/ModalMessage";
import ModalUserIter from "./ModalForItem/ModalUserIter";
import ModalPostBuild from "./ModalForItem/ModalPostBuild";
import HeaderItem from "./Item/HeaderItem";

const Dashboard = () => {
  const [modalProfileLink, setModalProfileLink] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const [modalUserIter, setModalUserIter] = useState(false);
  const [modalPostBuild, setModalPostBuild] = useState(false);

  const [page, setPage] = useState(1);

  const openModal = (fn) => {
    fn(true);
  };

  const closeModal = () => {
    setModalProfileLink(false);
    setModalMessage(false);
    setModalUserIter(false);
    setModalPostBuild(false);
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
          <HeaderItem />
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
                setModalUserIter={setModalUserIter}
                setModalPostBuild={setModalPostBuild}
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
      {modalUserIter && <ModalUserIter closeModal={closeModal} />}
      {modalPostBuild && <ModalPostBuild closeModal={closeModal} />}
    </div>
  );
};
export default Dashboard;
