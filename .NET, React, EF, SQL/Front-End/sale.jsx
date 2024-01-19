import * as React from "react";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "700px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Sale() {
  const [data, setData] = useState([{}]);

  const getData = () => {
    axios
      .get("https://localhost:7247/api/Sale")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // fetch

  const [product, setProduct] = useState("");
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const [saleDate, setSaleDate] = useState();

  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const handleCloseCreatModal = () => setOpenCreate(false);
  const [selectedId, SetSelectedId] = useState();

  useEffect(() => {
    if (selectedId) {
      const selectedItem = data.find((item) => item.id === selectedId);
      setProduct(selectedItem.product);
      setPrice(selectedItem.price);
      setQty(selectedItem.qty);
      setSaleDate(selectedItem.saleDate);
    }
  }, [selectedId, data]);

  const handleEdit = (id) => {
    setOpen(true);
    axios.get(`https://localhost:7247/api/Sale/${id}`).then((res) => {
      setProduct(res.data.product);
      setQty(res.data.qty);
      setPrice(res.data.price);
      setSaleDate(res.data.saleDate);
      SetSelectedId(id);
    });
  };

  const handleUpdate = () => {
    const url = `https://localhost:7247/api/Sale/${selectedId}`;
    const updatedProduct = {
      id: selectedId,
      product: product,
      qty: qty,
      price: price,
      saleDate: saleDate,
    };
    axios
      .put(url, updatedProduct)
      .then((res) => {
        getData();
        setOpen(false);
        alert(`${updatedProduct.name}, has been Updated`);
      })
      .catch((err) => console.log(err));
  };

  const handleClickAdd = () => {
    setOpenCreate(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    const url = "https://localhost:7247/api/Sale";

    const newClient = {
      id: uuidv4(),
      product,
      price,
      qty,
      saleDate,
    };

    axios.post(url, newClient).then((res) => {
      getData();
    });

    setOpenCreate(false);
  };

  const handleDelete = (product, id) => {
    if (window.confirm(`${product} will be deleted`)) {
      // Send a DELETE request to your server
      axios
        .delete(`https://localhost:7247/api/Client/${id}`)
        .then((response) => {
          if (response.status === 200) {
            setData((prevdata) => prevdata.filter((item) => item.id !== id));
            alert(`${product} has been deleted`);
          } else {
            alert("Failed to delete");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Canceled");
    }
  };

  return (
    <TableContainer component={Paper}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1 style={{ marginLeft: "20px" }}>Sale</h1>
        <Button
          variant="contained"
          size="large"
          style={{ marginRight: "20px" }}
          onClick={() => handleClickAdd()}
          color="success"
        >
          Add
        </Button>

        <Modal
          open={openCreate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TextField
                  required
                  id="outlined-required"
                  label="product"
                  onChange={(e) => {
                    setProduct(e.target.value);
                  }}
                />
              </TableCell>

              <TableCell align="center">
                <TextField
                  required
                  id="outlined-required"
                  label="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </TableCell>

              <TableCell align="center">
                <TextField
                  required
                  id="outlined-required"
                  label="qty"
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                />
              </TableCell>

              <TableCell align="center">
                <TextField
                  required
                  id="outlined-required"
                  label="saleDate (max 10 digits)"
                  onChange={(e) => {
                    setSaleDate(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>

            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 5 }}
            >
              <Button
                variant="contained"
                size="large"
                style={{ marginRight: "20px" }}
                onClick={() => handleCreate()}
                color="success"
              >
                Create
              </Button>

              <Button
                variant="contained"
                size="large"
                style={{ marginRight: "20px" }}
                onClick={() => handleCloseCreatModal()}
                color="error"
              >
                close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>

            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Qty</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">saleDate</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>

              <TableCell align="center">{item.product}</TableCell>
              <TableCell align="center">{item.price}</TableCell>
              <TableCell align="center">{item.qty}</TableCell>
              <TableCell align="center">{item.saleDate}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  size="medium"
                  color="error"
                  onClick={() => handleDelete(item.product, item.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Qty</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              {data
                .filter((item) => item.id === selectedId)
                .map((item) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <TextField
                        id="outlined-required"
                        variant="outlined"
                        placeholder={item.product}
                        value={product}
                        onChange={(e) => {
                          setProduct(e.target.value);
                        }}
                      />
                    </TableCell>

                    <TableCell align="center">
                      <TextField
                        id="outlined-required"
                        placeholder={item.price}
                        value={price}
                        variant="outlined"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      />
                    </TableCell>

                    <TableCell align="center">
                      <TextField
                        id="outlined-required"
                        placeholder={item.qty}
                        value={qty}
                        variant="outlined"
                        onChange={(e) => {
                          setQty(e.target.value);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </Table>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 5 }}
            >
              <Button
                variant="contained"
                size="small"
                style={{ marginRight: "5px" }}
                onClick={() =>
                  handleUpdate(selectedId, product, price, qty, saleDate)
                }
              >
                Edit
              </Button>
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={() => handleClose()}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </TableContainer>
  );
}
