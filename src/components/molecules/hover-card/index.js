import React from 'react'
import { Col, Row } from 'react-bootstrap';

export const HoverCard = ({data}) => {
 console.log(data, "lllll");

  return (
    <Row
      style={{
        border: "none",
        borderRadius: "5px",
        backgroundColor: data.color,
        color: "white",
      }}
    >
      <Col lg={8} className="text-center my-3">
        <div>
          <h3>{data.price}</h3>
        </div>
        <div>{data.type}</div>
      </Col>
      <Col lg={4} className="ps-1 text-center my-auto">
        <img src={data.image} width="70" height="70" className="zoom" />
      </Col>
    </Row>
  );
};
