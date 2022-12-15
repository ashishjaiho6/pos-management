import React, { useRef, useState, useEffect } from "react";
import styles from "./pos.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Header } from "../../components/layout/header";
import Slider from "react-slick";
import { DATA } from "../../constants/product";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Categorycard, ProductCard } from "../../components/molecules";
 
export const PosConatainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [products, setProducts] = useState([]);

  // <-----  Handling Category Change ------>
  useEffect(() => {
    DATA.map((item) => {
      if (item.title === selectedCategory) {
        setProducts(item.products);
      }
    });
  }, [selectedCategory]);

  const OnclickCategoryCard = (title) => {
    setSelectedCategory(title);
  };

  // <-----  For Category Slider ------>
  const sliderRef = useRef();
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <Container fluid style={{ padding: 25 }}>
        <Row>
          <Col lg={8}>
            <div className={`${styles.pageHeader}`}>
              <div className={`${styles.pageTitle}`}>
                <h4>Categories</h4>
                <h6>Manage your purchases</h6>
              </div>
            </div>
            <div>
              <div className={`${styles.arrowContainer}`}>
                <div className={`text-end`}>
                  <span>
                    <MdOutlineKeyboardArrowLeft
                      onClick={() => sliderRef.current.slickPrev()}
                      size={25}
                      className={`${styles.arrow}`}
                    />
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <MdOutlineKeyboardArrowRight
                      onClick={() => sliderRef.current.slickNext()}
                      className={`${styles.arrow}`}
                      size={25}
                    />
                  </span>
                </div>
              </div>
              <div style={{ paddingBlock: 20 }}>
                <Slider ref={sliderRef} {...settings} lazyLoad="ondemand">
                  {DATA.map(({ products, ...rest }, index) => {
                    return (
                      <div style={{}} key={index}>
                        <Categorycard
                          {...rest}
                          OnclickCategoryCard={OnclickCategoryCard}
                          selectedCategory={selectedCategory}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <Row style={{}}>
                {products.map((product, index) => {
                  return (
                    <Col lg={3} className={`mb-3`} key={index}>
                      <ProductCard {...product} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};
