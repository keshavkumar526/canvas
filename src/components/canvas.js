import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./canvas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NameModal from "./nameModal";

export default function Canvas() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(null);

  window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 450;
    canvas.width = window.innerWidth;

    let painting = false;

    function startPosition(e) {
      painting = true;
      draw(e);
    }

    function finishedPosition() {
      painting = false;
      ctx.beginPath();
    }

    function draw(e) {
      if (!painting) return;
      ctx.lineWidth = 10;
      ctx.linecap = "round";
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
  });
  const NameHandler = () => {
    setShowModal(true);
  };

  return (
    <div>
      <h5 style={{ marginLeft: "50%", fontSize: "5vh", fontWeight: "500",fontFamily:"-moz-initial" }}>
        {name}
      </h5>
      <Button
        variant="outline-primary"
        className="button"
        onClick={NameHandler}
      >
        Click To Name Shape
      </Button>
      <NameModal
        showModal={showModal}
        setShowModal={setShowModal}
        name={name}
        setName={setName}
      />
    </div>
  );
}
