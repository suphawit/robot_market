import styled, { css } from "styled-components";
import { Container, Row } from "react-bootstrap";
import { PlusCircle, Trash } from "react-bootstrap-icons";

export const CartContainer = styled.div`
  position: fixed;
  width: 300px;
  right: -300px;
  top: 0;
  font-size: 12px;

  transform: translateX(0);
  transition: all 0.5s;

  ${(props) => {
    if (props.active)
      return css`
        transform: translateX(-300px);
      `;
  }}
`;

export const CartTab = styled.div`
  position: absolute;
  left: -112px;
  top: 50%;
  width: 200px;
  background-color: #666;
  transform: rotate(270deg);
  cursor: pointer;
`;

export const Wrapper = styled(Container)`
  border: 1px solid #666;
  background-color: rgba(230, 230, 230, 0.3);
  height: 100vh;
`;

export const RobotHeaderRow = styled(Row)`
  border-bottom: 1px solid #666;
`;

export const RobotRow = styled(Row)`
  border-bottom: 1px solid #666;
  :first-child {
    border-top: 1px solid #666;
  }
`;
export const AddCursor = styled(PlusCircle)`
  cursor: pointer;
  margin-right: 10px;
`;
export const RemoveCursor = styled(Trash)`
  cursor: pointer;
  margin-right: 10px;
`;
