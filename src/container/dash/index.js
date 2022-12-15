import React from "react";
import { Row, Col } from "react-bootstrap";
import { DashCard } from "../../components/molecules";
import { CARD_DATA } from "../../constants/dashboard";
import { HoverCard } from "../../components/molecules";
import { HOVER_CARD_DATA } from "../../constants/dashboard";

export const DashContainer = () => {
  return (
    <>
      <Row className="mx-2">
        {CARD_DATA.map((item, i) => {
          return (
            <Col lg={3} md={6} className="px-4 py-3">
              <DashCard data={item} />
            </Col>
          );
        })}

        {HOVER_CARD_DATA.map((item, i) => {
          return (
            <Col lg={3} md={6} className="px-4 py-3">
              <HoverCard data={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
