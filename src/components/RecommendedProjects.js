import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuerySizes } from "../utils/mediaQuery";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "100%",
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const modalData = [
  {
    title: "Garage Door Replacement",
    image: <img src="../images/group1.png" />,
  },
  {
    title: "Solar Roof",
    image: <img src="../images/group2.png" />,
  },
  {
    title: "Major Kitchen Remodel",
    content: "These recommended projects can increase the your home value",
  },
  {
    title: "Deck Addition",
    image: <img src="../images/group4.png" />,
  },
  {
    title: "Entry door replacement",
    content: "These recommended projects can increase the your home value",
  },
];

function RecommendedProjects() {
  const cardData = [
    {
      image: "../images/group1.png",
      title: "Garage door replacement",
      costing: "$11575",
      costingbtn: "11.34%",
      cost: "$1,000",
    },
    {
      image: "../images/group2.png",
      title: "Solar Roof",
      costing: "$34545",
      costingbtn: "23.34%",
      cost: "$2,000",
    },
    {
      image: "../images/group3.png",
      title: "Major Kitchen Remodel",
      costing: "$45656",
      costingbtn: "45.66%",
      cost: "$3,000",
    },
    {
      image: "../images/group4.png",
      title: "Deck Addition",
      costing: "$56474",
      costingbtn: "21.55%",
      cost: "$4,000",
    },
    {
      image: "../images/group5.png",
      title: "Entry door replacement",
      costing: "$67675",
      costingbtn: "87.34%",
      cost: "$5,000",
    },
  ];
  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const { isSmall } = useMediaQuerySizes();

  const handleOpen = (index) => {
    setModalIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ProjectCard = ({ card, index }) => {
    return (
      <Box
        className="project1"
        sx={{
          height: isSmall ? "400px" : "350px",
        }}
      >
        <img src={card.image} alt="" />
        <h5 className="door">{card.title}</h5>
        <p className="by">Value increase by</p>
        <div className="costing">
          <h4>{card.costing}</h4>
          <button>{card.costingbtn}</button>
        </div>
        <p className="project-para">Project Cost</p>
        <h5 className="costy">{card.cost}</h5>
        <p
          className="quote"
          onClick={() => handleOpen(index)}
          style={{ cursor: "pointer" }}
        >
          Get a quote
        </p>
      </Box>
    );
  };

  return (
    <>
      <section className="recommended-projects">
        <div className="container">
          <div className="recommended-part">
            <h4>These recommended projects can increase the your home value</h4>
            <Box
              sx={{
                display: "flex",
                flexDirection: isSmall ? "column" : "unset",
              }}
              className="projects"
            >
              {cardData.map((card, i) => (
                <div key={i}>
                  <ProjectCard card={card} index={i} />
                </div>
              ))}
            </Box>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalData[modalIndex].title}
            </Typography>
            {modalData[modalIndex].image ? (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData[modalIndex].image}
              </Typography>
            ) : (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData[modalIndex].content}
              </Typography>
            )}

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Modal>
      </section>
    </>
  );
}

export default RecommendedProjects;
