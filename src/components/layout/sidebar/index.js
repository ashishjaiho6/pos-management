import React from "react";
import { Accordion } from "react-bootstrap";
import { TbDashboard } from "react-icons/tb";
import { GiCardboardBoxClosed } from "react-icons/gi";
import styles from "./sidebar.module.css";
import { SIDENAV } from "../../../constants/app-constants/sidebar";
import { useRouter } from "next/router";

export const SideBar = () => {
  const Route = useRouter();
  console.log(Route, "RouteRoute");
  return (
    <>
      <div
        className="ps-3 pt-3"
        style={{
          overflowY: "scroll",
          height: "500px",
          backgroundColor: "white",
        }}
      >
        <div
          href="/"
          className={`${styles.myAccordion1} ${
            Route.pathname == "/" ? styles.activeClass : ""
          }`}
        >
          <TbDashboard className={`${styles.myIcon}`} />
          Dashboard
        </div>

        <Accordion defaultActiveKey="0" className={`accordionBorder `}>
          {SIDENAV.map((item, index) => {
            return (
              <Accordion.Item eventKey={item.id} key={index}>
                {console.log(item.href, Route.pathname, "hereeeeeee")}

                <Accordion.Header
                  className={`${styles.myAccordion} myButton  ${
                    item?.href?.includes(Route.pathname) ? 'activeClass' : ""
                  } `}
                >
                  <GiCardboardBoxClosed className={`${styles.myIcon}`} />
                  <div href={item.href}>{item.title}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul style={{ display: "block" }} className={`myList`}>
                    {item.subNav.map((ite, i) => {
                      return (
                        <li>
                          <a href={ite.href}>{ite.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};
