import React, { useState } from "react";
import "./App.css";
import { Box, Container, Grid, Button } from "@mui/material";
import Card from "./components/card/Card";
import Modal from "./components/modal/Modal";
import ModalContent from "./components/alert-modal-content/AlertModalContent";
import AddForm from "./components/form/AddForm";

const data = [
  {
    id: 1,
    title: "Lizard",
    count: 10,
    details:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    imageSrc: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  },
  {
    id: 2,
    title: "Cat",
    count: 23,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "https://wildcard.codestuff.io/cat/640/320",
  },
  {
    id: 3,
    title: "Dog",
    count: 6,
    details:
      "Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.",
    imageSrc: "https://wildcard.codestuff.io/dog/640/320",
  },
  {
    id: 4,
    title: "Fish",
    count: 16,
    details:
      "Enim tortor at auctor urna nunc id cursus metus aliquam. Euismod nisi porta lorem mollis aliquam. Arcu vitae elementum curabitur vitae nunc sed.",
    imageSrc: "https://wildcard.codestuff.io/fish/640/320",
  },
  {
    id: 5,
    title: "Fish",
    count: 12,
    details:
      "Enim tortor at auctor urna nunc id cursus metus aliquam. Euismod nisi porta lorem mollis aliquam. Arcu vitae elementum curabitur vitae nunc sed.",
    imageSrc: "https://wildcard.codestuff.io/fish/640/320",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardItems, setCardItems] = useState(data);

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const onAdd = (newItem) => {
    const id = Math.random().toString(36).slice(2, 10);

    setCardItems((prevState) => [
      ...prevState,
      {
        ...newItem,
        id,
      },
    ]);
  };

  const onCountChange = (count, id) => {
    setCardItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Box className="App-header">
          <Box>
            <AddForm onAdd={onAdd} />
          </Box>

          <Button variant="contained" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
          <Grid alignItems="stretch" container spacing={2}>
            {cardItems
              // .filter((item) => item.title !== "Lizard")
              .map((item) => (
                <Grid key={item.id} item xs={6} md={3}>
                  <Card
                    id={item.id}
                    title={item.title}
                    count={item.count}
                    details={item.details}
                    imageSrc={item.imageSrc}
                    onCountChange={onCountChange}
                  />
                </Grid>
              ))}
          </Grid>
          <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalContent handleClose={handleClose} />
          </Modal>
        </Box>
      </Container>
    </div>
  );
}

export default App;
