
function Modal(props) {
  return (
    <div className="modal">
      <h2>Are you sure ?</h2>
      <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}
export default Modal;