import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// インポート先でtypoミスがあるので上の方が良いかもね！なぜならtypoミスを検知できる
// const ColorfulMessage = (props) => {
//   const { color, children } = props;
//   const contentStyle = {
//     color,
//     fontSize: "18px"
//   };
//   return <p style={contentStyle}>{children}</p>;
// };
// export default ColorfulMessage;
