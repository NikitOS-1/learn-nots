import { Pagination } from "@mui/material";
import "./Paginations.css";

const Paginations = ({ totalPages, page, handleChangePage }) => {
  return (
    <div className="pagination">
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, num) => handleChangePage(_, num)}
      />
    </div>
  );
};
export default Paginations;
