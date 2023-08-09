import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { data } from "../data";

const PaginatedTable = () => {
  const [page, setPage] = useState(1);

  const itemsPerPage = 6; // Количество элементов на странице

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              {/* ... */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.scraping}</TableCell>
                  {/* ... */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default PaginatedTable;
