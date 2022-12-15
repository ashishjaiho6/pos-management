import React from "react";
import { Col, Row } from "react-bootstrap";
import { Header } from "../../components/layout/header";
import { SideBar } from "../../components/layout/sidebar";
import { Pro_List } from "./productList";
export const ProductContainer = () => {
  return (
    <>
      <Header />
      <Row className="g-0">
        <Col style={{ flex: 3 }}>
          <SideBar />
        </Col>
        <Col style={{ flex: 12,padding:25 }}>
          <Pro_List />
        </Col>
      </Row>
    </>
  );
};
