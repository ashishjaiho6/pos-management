import React from "react";
import { GrAdd } from "react-icons/gr";

export const ListHeader = () => {
  return (
    <>
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-0">Product List</h5>
          <a>Manage your products</a>
        </div>
        <div>
          <a
            className="d-flex justify-content-center align-items-center"
            style={{
              borderRadius: "5px",
              padding: "7px 13px",
              background: "#ff9f43",
              color: "#ffffff",
            }}
          >
            <GrAdd color="#ffffff" className="me-2" /> Add New Product
          </a>
        </div>
      </div>

      
    </>
  );
};
