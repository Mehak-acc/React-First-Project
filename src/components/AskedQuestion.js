import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
    title: "What is HELOC and how it is calculated?",
    content:
      "HELOC (Home Equity Line of Credit) is a line of credit secured using your home as collateral. The credit available to you as a borrower through a home equity loan depends on how much equity you have. Our simple calculation of 80% value (Maximum debt allowed) - your outstanding home loan = your available HELOC. Your lender will work with you to determine your available HELOC. There are number of conditions a borrower must meet in order to secure a HELOC such as a specific amount of equity in the home, a strong credit history, and other lender requirements.",
  },
  {
    title: "What is Home Equity?",
    content:
      "Your home equity is the amount of your home that you own. Your home equity value is the difference between the current market value of your home and what you owe your lender. As you make mortgage payments you reduce your principle owned and increase your equity.",
  },
  {
    title: "With my available HELOC, what can I buy?",
    content:
      "HELOC is a flexible line of credit backed by the equity of your home. HELOC provides a revolving line of credit allowing the home owner to access as needed. Common uses of HELOC are home improvement projects and renovations, debt consolidations, education or business ventures and medical emergency expenses.",
  },
];

function AskedQuestion() {
  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleOpen = (index) => {
    setModalIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="equity-section ">
        <div className="equity">
          <div className="second-div">
            <div className="first-part">
              <h4>Frequently asked questions on home equity</h4>
              <ul>
                {modalData.map((data, index) => (
                  <li
                    key={index}
                    onClick={() => handleOpen(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {data.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 32, fontWeight: 500 }}
          >
            {modalData[modalIndex].title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: 16 }}
          >
            {modalData[modalIndex].content}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default AskedQuestion;