import React from "react";
import { Form } from "react-bootstrap";
import { FilterMaterialSelect } from "./filter.styled";

const Filter = ({ onChange }) => {
  return (
    <FilterMaterialSelect>
      <label for="filterMaterial">Material</label>
      <Form.Control
        id="filterMaterial"
        as="select"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="Cotton">Cotton</option>
        <option value="Concrete">Concrete</option>
        <option value="Granite">Granite</option>
        <option value="Fresh">Fresh</option>
        <option value="Frozen">Frozen</option>
        <option value="Metal">Metal</option>
        <option value="Plastic">Plastic</option>
        <option value="Rubber">Rubber</option>
        <option value="Steel">Steel</option>
        <option value="Soft">Soft</option>
        <option value="Wooden">Wooden</option>
      </Form.Control>
    </FilterMaterialSelect>
  );
};

export default Filter;
