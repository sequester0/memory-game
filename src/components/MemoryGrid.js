import { Row } from "antd";
import React from "react";
import Item from "./Item";

function MemoryGrid() {
  return (
    <div style={{ userSelect: "none" }}>
      <Row
        justify="space-between"
        gutter={[8, 8]}
        style={{ maxWidth: "1050px" }}
      >
        <Item />
      </Row>
    </div>
  );
}

export default MemoryGrid;
