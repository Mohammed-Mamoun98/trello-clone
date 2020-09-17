import React, { memo } from "react";

const Child = memo((props) => {
  console.log("child has rerendered");
  return <div>child compoent</div>;
});

export default Child;
