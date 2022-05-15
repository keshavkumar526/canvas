import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function NameModal({ showModal, setShowModal, name, setName }) {
  const FormHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <Modal
        show={showModal}
        style={{ top: "20vh", width: "70vh", left: "75vh" }}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body data-aos="zoom-in" offSet="800">
          <div className="comCreatePostModalContainer">
            <Form.Label
              htmlFor="inputPassword5"
              style={{ fontWeight: "700", fontSize: "3vh" }}
            >
              Enter Name of Shape
            </Form.Label>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              onChange={FormHandler}
            />
            <Button
              variant="dark"
              type="submit"
              style={{
                marginTop: "4vh",
                marginLeft: "38%",
                marginBottom: "1vh",
                fontFamily: "cursive",
              }}
              onClick={() => setShowModal(false)}
            >
              ADD Name
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
