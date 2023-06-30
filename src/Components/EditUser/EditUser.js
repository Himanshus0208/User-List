import { useState,useEffect,useContext } from "react";
import UserContext from "../Store/user-context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function EditUser(props) {
  
  const [user, setUser] = useState({
    id: "",
    fname: "",
    lname: "",
    dob: "",
  });

  const userCtx = useContext(UserContext);

  useEffect(()=>{
    setUser({
      id: props.toBeEditedUser.id,
      fname: props.toBeEditedUser.fname,
      lname: props.toBeEditedUser.lname,
      dob: props.toBeEditedUser.dob,
    })
  },[props.toBeEditedUser]);

  const handleChange = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
  };
  const editSubmitHanlder=()=>{
    userCtx.editUser(user, user.id);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="add-user-form">
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                name="id"
                value={user.id}
                onChange={handleChange}
                disabled= {true}
              />
            </div>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="fname"
                value={user.fname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lname"
                value={user.lname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            props.handleClose();
            editSubmitHanlder();
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser;
