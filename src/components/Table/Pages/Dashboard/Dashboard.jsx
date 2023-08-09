import "./Dashboard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { data } from "./data";
import { useState } from "react";
import Paginations from "./Pagination/Pagination";

const Dashboard = () => {
  const [page, setPage] = useState(1);

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
              Scraping Date
              <FilterAltIcon />
            </th>
            <th>Link to the post</th>
            <th>
              Link to the Group
              <FilterAltIcon />
            </th>
            <th>Profile link</th>
            <th>Message</th>
            <th>
              AI status
              <FilterAltIcon />
            </th>
            <th>
              User iteraction
              <FilterAltIcon />
            </th>
            <th>
              Post Builder
              <FilterAltIcon />
            </th>
            <th>
              Post status
              <FilterAltIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.scraping}</td>
                <td>{i.linkPost}</td>
                <td>{i.linkGroup}</td>
                <td>{i.linkProfile}</td>
                <td>{i.message}</td>
                <td>{i.aiStatus}</td>
                <td>{i.userIter}</td>
                <td>{i.postBuild}</td>
                <td>{i.postStatus}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Paginations
        totalPages={totalPages}
        page={page}
        handleChangePage={handleChangePage}
      />
    </div>
  );
};
export default Dashboard;
