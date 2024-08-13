import React, { useState, useRef } from 'react';

function OnClickEvent() {
  const [inputs, setInputs] = useState([]);
  const myList = useRef(null);

  const handleAdd = () => {
    const inputGroup = document.createElement('div');
    const textInput = document.createElement('input');
    textInput.type = 'text';
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.onclick = () => handleRemove(inputGroup);

    inputGroup.appendChild(textInput);
    inputGroup.appendChild(fileInput);
    inputGroup.appendChild(submitInput);
    inputGroup.appendChild(removeButton);

    if (myList.current) {
      myList.current.appendChild(inputGroup);
    }
    setInputs([...inputs, inputGroup]);
  };

  const handleRemove = (inputGroup) => {
    if (myList.current) {
      myList.current.removeChild(inputGroup);
    }
    setInputs(inputs.filter((input) => input !== inputGroup));
  };

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <div id="myList" ref={myList} />
    </>
  );
}

export default OnClickEvent;