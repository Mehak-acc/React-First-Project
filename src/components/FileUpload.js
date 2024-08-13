import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploaderKey, setUploaderKey] = useState(Date.now()); 

  const handleChange = (file) => {
    setFile(file);
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    setUploaderKey(Date.now()); 
  };

  return (
    <div className="fileuploader">
      <FileUploader
        key={uploaderKey} 
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      {file ? (
        <div>
          <p style={{marginLeft:"20px"}}> {file.name}</p>
        </div>
      ) : null}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
          position: "relative",
        }}
      >
        {preview ? (
          <div>
            <img
              src={preview}
              alt="Upload Image"
              style={{ maxHeight: "80%", maxWidth: "80%" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <IconButton onClick={handleRemove}>
                <CloseIcon sx={{ color: "black" }} />
              </IconButton>
            </div>
          </div>
        ) : null}
      </Box>
    </div>
  );
}

export default DragDrop;
