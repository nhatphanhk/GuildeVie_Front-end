import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BlockIcon from '@mui/icons-material/Block';

const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  { id: "ingedientName", label: "Ingedient Name", align: "center",minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "center",
    valueFormatter: (params) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(params.value);
      }
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
  },
  {
    id: "importDate",
    label: "Import Date",
    align: "center",
    minWidth: 50,
    format: (value) => new Date(value).toLocaleDateString("vi-VI"),
  },
  {
    id: "expiredDate",
    label: "Expired Date",
    minWidth: 50,
    align: "center",
    format: (value) => new Date(value).toLocaleDateString("vi-VI"),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

function createData(id, ingedientName, price, quantity, importDate, expiredDate, action) {
  return { id, ingedientName, price, quantity, importDate, expiredDate, action };
}

const rows = [
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
  createData(1, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024", <> {" "}<CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;<BlockIcon style={{ color: "red" }} /></>),
];

export default function ListofIngredients() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 10,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    border: "1px solid #015E44",
    margin: 20,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: 300,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      display: "none",
    },
  }));

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <Paper sx={{ width: "90%", overflow: "hidden", boxShadow: 3 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search here…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <TableContainer sx={{ maxHeight: 800 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      color: "#015E44",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ color: "#015E44", fontSize: 16 }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
