import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { Cart as CartIcon } from "react-bootstrap-icons";
import _ from "lodash";
import { addToCart, deleteToCart } from "../../../../actions/cart";
import {
  CartContainer,
  CartTab,
  Wrapper,
  RobotHeaderRow,
  RobotRow,
  AddCursor,
  RemoveCursor,
} from "./cart.styled";

const Cart = () => {
  let dispatch = useDispatch();
  const [active, isActive] = useState(false);
  const slideCartTab = () => {
    isActive(!active);
  };

  const addRobotToCart = (chosenRobot) => {
    dispatch(addToCart(chosenRobot));
  };

  const removeRobotToCart = (chosenRobotName) => {
    dispatch(deleteToCart(chosenRobotName));
  };
  const cartList = useSelector((state) => state.cartReducer.payload);

  const total = _.reduce(cartList, (sum, r) => sum + parseFloat(r.price), 0);
  const cartListGroup = _.groupBy(cartList, (r) => r.name);
  const cartKey = Object.keys(cartListGroup);

  return (
    <CartContainer active={active}>
      <CartTab onClick={slideCartTab}>
        <CartIcon />
        My Cart
      </CartTab>
      <Wrapper>
        <RobotHeaderRow>
          <Col md={3}>Image</Col>
          <Col md={3}>Name</Col>
          <Col md={3}>Count</Col>
          <Col md={3}></Col>
        </RobotHeaderRow>
        {cartKey.map((key, i) => (
          <RobotRow key={i}>
            <Col md={3}>
              <img
                src={cartListGroup[key][0].image}
                style={{ width: "100%" }}
              />
            </Col>
            <Col md={3}>{cartListGroup[key][0].name}</Col>
            <Col md={3}>{cartListGroup[key].length}</Col>
            <Col md={3}>
              <AddCursor
                onClick={() => addRobotToCart(cartListGroup[key][0])}
              />
              <RemoveCursor
                onClick={() => removeRobotToCart(cartListGroup[key][0].name)}
              />
            </Col>
          </RobotRow>
        ))}
        {cartList.length > 0 && <p>Total Robot: {cartList.length}</p>}
        {total && <p>Total Price: ฿{total}</p>}
      </Wrapper>
    </CartContainer>
  );
};

export default Cart;
