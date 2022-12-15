import React from "react";
import { Col, Row } from "react-bootstrap";

export const DashCard = ({data}) => {
  return (
    <Row
      style={{
        backgroundColor: "#f8f9fc",
        border: "none",
        borderRadius: "5px",
      }}
    >
      <Col lg={3} className="text-center my-auto">
        <img
          src={data.image}
          width="50"
          height="50"
          className="p-2"
          style={{ borderRadius: "25px", backgroundColor: data.color }}
        />
      </Col>
      <Col lg={9} className="text-center py-3">
        <div>{data.price}</div>
        <div>{data.title}</div>
      </Col>
    </Row>
  );
};
