import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SideBar } from "../src/components/layout/sidebar";
import { Header } from "../src/components/layout/header";
import { DashContainer } from "../src/container/dash";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Header />
      <Row className="g-0">
        <Col style={{ flex: 3 }}>
          <SideBar />
        </Col>
        <Col style={{ flex: 12 }}>
          <DashContainer />
        </Col>
      </Row>
    </>
  );
}
