import React from "react";
import "./index.css";

export default function Modal({ isOpen, setIsOpen, closeModal }) {
  // if showModal Boolean is false, then return nothing.
  if (!isOpen) return null;

  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-box">
        <h1>My Modal</h1>
      </div>
    </div>
  );
}
