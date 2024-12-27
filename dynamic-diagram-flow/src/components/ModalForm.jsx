import React, { useState } from "react";
import ReactModal from "react-modal";
import "./ModalForm.css";

// Configure ReactModal accessibility
ReactModal.setAppElement("#root");

const ModalForm = ({ isOpen, onClose, onSubmit, initialData = {}, type }) => {
  const [formData, setFormData] = useState(initialData);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({});
    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>{type === "node" ? "Add/Edit Node" : "Add/Edit Edge"}</h2>
      <form onSubmit={handleSubmit}>
        {type === "node" && (
          <>
            <label>
              Node ID:
              <input
                type="text"
                name="id"
                value={formData.id || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Label:
              <input
                type="text"
                name="label"
                value={formData.label || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Position X:
              <input
                type="number"
                name="positionX"
                value={formData.positionX || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Position Y:
              <input
                type="number"
                name="positionY"
                value={formData.positionY || ""}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}
        {type === "edge" && (
          <>
            <label>
              Edge ID:
              <input
                type="text"
                name="id"
                value={formData.id || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Source Node ID:
              <input
                type="text"
                name="source"
                value={formData.source || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Target Node ID:
              <input
                type="text"
                name="target"
                value={formData.target || ""}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}
        <div className="modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </ReactModal>
  );
};

export default ModalForm;
