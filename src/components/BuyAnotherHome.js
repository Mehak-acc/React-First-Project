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
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const modalData = [
  {
    title: "Sell your current & another home",
    content:
      "HELOC (Home Equity Line of Credit) is a line of credit secured using your home as collateral. The credit available to you as a borrower through a home equity loan depends on how much equity you have. Our simple calculation of 80% value (Maximum debt allowed) - your outstanding home loan = your available HELOC. Your lender will work with you to determine your available HELOC. There are number of conditions a borrower must meet in order to secure a HELOC such as a specific amount of equity in the home, a strong credit history, and other lender requirements.",
  },
  {
    title: "Buy a second or an investment property",
    content:
      "Your home equity is the amount of your home that you own. Your home equity value is the difference between the current market value of your home and what you owe your lender. As you make mortgage payments you reduce your principle owned and increase your equity.",
  },
  {
    title: "Rent your home & buy another home",
    content:
      "HELOC is a flexible line of credit backed by the equity of your home. HELOC provides a revolving line of credit allowing the home owner to access as needed. Common uses of HELOC are home improvement projects and renovations, debt consolidations, education or business ventures and medical emergency expenses.",
  },
  {
    title: "Downsize, sell and cash out",
    content:
      "HELOC is a flexible line of credit backed by the equity of your home. HELOC provides a revolving line of credit allowing the home owner to access as needed. Common uses of HELOC are home improvement projects and renovations, debt consolidations, education or business ventures and medical emergency expenses.",
  },
];

function Button1() {
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

  const boxData = [
    {
      image: "../images/one.png",
      title: "Sell your current  & another home",
      price: "$587K",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed to eiusmod tempor",
      moredetails: "See details ",
    },
    {
      image: "../images/two.png",
      title: "Buy a second or an investment property",
      price: "$835K",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed to eiusmod tempor",
      moredetails: "See details ",
    },
    {
      image: "../images/three.png",
      title: "Rent your home & buy another home",
      price: "$624K",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed to eiusmod tempor",
      moredetails: "See details ",
    },
    {
      image: "../images/four.png",
      title: "Downsize, sell and cash out",
      price: "$347K",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed to eiusmod tempor",
      moredetails: "See details ",
    },
  ];

  const BoxCard = ({ box, index }) => {
    return (
      <Box className="box1">
        <div className="inner-details">
          <img src={box.image} alt="" />
          <h2>{box.price}</h2>
          <h4>{box.title}</h4>
          <p>{box.description}</p>
          <h3 onClick={() => handleOpen(index)} style={{ cursor: "pointer" }}>
            {box.moredetails}{" "}
          </h3>
        </div>
      </Box>
    );
  };

  return (
    <div>
      <p className="save-p">Refinancing could save you interest</p>
      <div className="button1-content">
        <Box
          className="boxes"
          sx={{ display: "flex", flexDirection: isSmall ? "column" : "unset" }}
        >
          {boxData.map((box, i) => (
            <div key={i}>
              <BoxCard box={box} index={i} />
            </div>
          ))}
        </Box>
        <Box
          className="kathle-intro"
          sx={{
            display: "flex",
            paddingBottom: isSmall ? "30px" : "unset",
            flexDirection: isSmall ? "column" : "unset",
          }}
        >
          <Box
            className="kathle-first-part"
            sx={{
              display: "flex",
              flexDirection: isSmall ? "column" : "unset",
            }}
          >
            <div className="kathle-profile">
              <img src="../images/kathle.png" alt="" />
              <p>Kathle Allen</p>
            </div>
            <div className="kathle">
              <h4>Have any questions about the value of your home?</h4>
              <p>
                Reach out to me today and I'd be happy to discuss your home
                valuation and future purchasing power
              </p>
            </div>
          </Box>
          <Box
            sx={{ margin: isSmall ? "0 auto" : "46px 47px 46px 0px" }}
            className="contactbtn"
          >
            Contact me
          </Box>
        </Box>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalData[modalIndex].content}
          </Typography>
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
    </div>
  );
}

export default Button1;
