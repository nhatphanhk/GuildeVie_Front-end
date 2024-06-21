import * as React from "react";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import TableSeller from '~/components/Seller/TableSeller';

const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  {
    id: "discount_name",
    label: "Discount Name",
    align: "center",
    minWidth: 100,
  },
  {
    id: "discount_code",
    label: "Discount Code",
    minWidth: 100,
    align: "center",
  },
  {
    id: "discount_amount",
    label: "Discount Amount",
    minWidth: 100,
    align: "center",
  },
  {
    id: "expires",
    label: "Expires",
    align: "center",
    minWidth: 50,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

function createData(id, discount_name, discount_code, discount_amount, expires) {
  return { id, discount_name, discount_code, discount_amount, expires };
}

const initialRows = [
  createData(1, "For Dog Meat", "Coupon", "100%", "Never"),
  createData(2, "For All Meal", "Coupon", "100%", "Never"),
  createData(3, "For All Meal", "Coupon", "100%", "Never"),
  createData(4, "For All Meal", "Coupon", "100%", "Never"),
  createData(5, "For All Meal", "Coupon", "100%", "Never"),
  createData(6, "For All Meal", "Coupon", "100%", "Never"),
  createData(7, "For All Meal", "Coupon", "100%", "Never"),
  createData(8, "For All Meal", "Coupon", "100%", "Never"),
  createData(9, "For All Meal", "Coupon", "100%", "Never"),
  createData(10, "For All Meal", "Coupon", "100%", "Never"),
  createData(11, "For All Meal", "Coupon", "100%", "Never"),
];

export default function SellerDiscountCodeContent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState("");
  const [rows, setRows] = React.useState(initialRows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter(row =>
    row.discount_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleOnSubmit = () => {
    if (!searchValue) {
      toast.error("Please enter discount name to search!");
      return;
    }
  };

  const onDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    console.log(`Deleted row with id: ${id}`);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <Paper
        className="SellerMenuContent"
        sx={{ width: "70vw", overflow: "hidden", boxShadow: 3 }}
      >
        {/* Search in table and create new  */}
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
              placeholder="Search by discount name!"
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
                      sx={{
                        color: searchValue ? "#015E44" : "transparent",
                        cursor: "pointer",
                        mr: "4px",
                      }}
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

        {/* Table */}
        <TableSeller
          columns={columns}
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          filteredRows={filteredRows}
          onDelete={onDelete}
        />
      </Paper>
    </div>
  );
}




