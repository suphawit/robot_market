import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../actions/cart";
import { RCard, RImg, RTitle } from "./card.styled";
import { dateFormat, eArabic } from "../../../../shared-function";

const RobotCard = ({ robot }) => {
  let dispatch = useDispatch();
  const addRobotToCart = (chosenRobot) => {
    dispatch(addToCart(chosenRobot));
  };
  return (
    <RCard>
      <RImg variant="top" src={robot.image} />
      <Card.Body>
        <RTitle>{robot.name}</RTitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Price: ฿{eArabic(robot.price)}</ListGroupItem>
        <ListGroupItem>Stock: {robot.stock}</ListGroupItem>
        <ListGroupItem>Create At: {dateFormat(robot.createdAt)}</ListGroupItem>
        <ListGroupItem>Material: {robot.material}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button
          disabled={robot.stock === 0}
          onClick={() => addRobotToCart(robot)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </RCard>
  );
};

export default RobotCard;
