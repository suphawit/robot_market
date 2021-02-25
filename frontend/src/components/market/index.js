import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./component/card";
import Filter from "./component/filter";
import Cart from "./component/cart";
import { fetchRobotListLog } from "../../actions/robotList/index";

function Market() {
  const [filterMaterial, setFilterMaterial] = useState("");
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRobotListLog());
  }, []);

  const robotList = useSelector((state) =>
    state.getRobotListReducer.payload.filter((robot) => {
      if (filterMaterial) return robot.material === filterMaterial;
      return robot;
    })
  );

  return (
    <div className="App">
      <Container>
        <h1>Robot Market</h1>
        <Row>
          <Col md={{ span: 2, offset: 10 }}>
            <Filter onChange={setFilterMaterial} />
          </Col>
        </Row>
        <Row>
          {robotList.map((robot, i) => (
            <Col md={3} key={i}>
              <Card robot={robot} />
            </Col>
          ))}
        </Row>
      </Container>
      <Cart />
    </div>
  );
}

export default Market;
