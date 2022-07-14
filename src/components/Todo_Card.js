import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal()
  {
    setModalIsOpen(false);
  }

  function deleteHandler() {
    setModalIsOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal onClick={closeModal}/> : null}

      {modalIsOpen && <Backdrop onClick={closeModal} />}
    </div>
  );
}
export default Card;
