import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import BlockIcon from "@mui/icons-material/Block";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from 'react-toastify';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";


const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  {
    id: "dish_name",
    label: "Dish Name",
    align: "center",
    minWidth: 100,
  },
  {
    id: "description",
    label: "Description",
    minWidth: 100,
    align: "center"
  },
  {
    id: "category",
    label: "Category",
    minWidth: 100,
    align: "center",
  },
  {
    id: "servings",
    label: "Servings",
    align: "center",
    minWidth: 50
  },
  {
    id: "tags",
    label: "Tags",
    minWidth: 50,
    align: "center"
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

function createData(
  id,
  dish_name,
  description,
  category,
  servings,
  tags,
  action
) {
  return {
    id,
    dish_name,
    description,
    category,
    servings,
    tags,
    action,
  };
}

const rows = [
  createData(
    1,
    "Cat Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    2,
    "Dog Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    3,
    "Mouse Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    4,
    "Lion Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    5,
    "Fog Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    6,
    "Vegetable",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    7,
    "Waifu",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    8,
    "Dog Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    9,
    "Dog Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    "10",
    "Dog Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    11,
    "Dog Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
  createData(
    12,
    "Dog Meat",
    "Taste",
    "Dessert",
    "2",
    "Breakfast",
    <>
      {" "}
      <CheckBoxIcon style={{ color: "#6DF292" }} /> &nbsp; &nbsp; &nbsp; &nbsp;
      <BlockIcon style={{ color: "red" }} />
    </>
  ),
];

export default function SellerMenuContent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [searchValue, setSearchValue] = React.useState("");

  const filteredRows = rows.filter(row =>
    row.dish_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleOnSubmit = () => {
    if (!searchValue) {
      toast.error('Please enter dish name to search!')
      return
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <Paper className="SellerMenuContent" sx={{ width: "70vw", overflow: "hidden", boxShadow: 3 }}>
        <Box
          sx={{
            width: "100%",
            padding: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Search by dish name!"
              variant="outlined"
              size="small"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              sx={{
                "& label": { color: "#015E44" },
                "& input": { color: "#015E44" },
                "& label.Mui-focused": { color: "#015E44" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#015E44" },
                  "&:hover fieldset": { borderColor: "#015E44" },
                  "&.Mui-focused fieldset": { borderColor: "#015E44" },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CloseIcon
                      fontSize="medium"
                      sx={{ color: searchValue ? '#015E44' : 'transparent', cursor: "pointer", mr: '4px' }}
                      onClick={() => setSearchValue("")}
                    />

                    <SearchIcon
                      fontSize="medium"
                      sx={{ color: "#015E44", cursor: "pointer" }}
                      onClick={handleOnSubmit}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Button
              size="large"
              variant="outlined"
              sx={{
                color: "#015E44",
                borderColor: "#015E44",
                borderWidth: 1,
                "&:hover": {
                  borderColor: "#015E44",
                },
              }}
            >
              <Typography variant="h7" sx={{ fontWeight: "bolder" }}>
                Create New
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box p={1}>
          <TableContainer sx={{
                  // Không xác định được cụ thể chiều cao của trang nên tự ước lượng
                  height: 'calc(100vh - 270px)',
                }}>
            <Table stickyHeader aria-label="sticky table" >
              <TableHead>
                <TableRow>
                  {columns.map(column => (
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
              <TableBody
              >
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map(column => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ color: "#015E44", fontSize: 16 }}
                              onClick={column.onClick}
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
        </Box>
      </Paper>
    </div>
  );
}
