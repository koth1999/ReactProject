import React from "react";
import styled from "styled-components";

const ImageBlock = styled.div`
  width: 600px;
  height: 600px;
  border: 2px solid black;
  margin-left: 400px;
  margin-top: 80px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 0;
`;

const GridCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 8px;

  /* 선을 겹치는 위치에 추가 */
  border-left: ${(props) =>
    props.cellNumber % 8 === 1 ? "1px solid black" : "none"};
  border-right: ${(props) =>
    props.cellNumber % 8 === 0 ? "1px solid black" : "none"};
  border-top: ${(props) => (props.cellNumber <= 8 ? "1px solid black" : "none")};
  border-bottom: ${(props) =>
    props.cellNumber >= 57 ? "1px solid black" : "none"};

  ${(props) => {
    switch (props.cellNumber) {
      case 1:
      case 2:
      case 9:
      case 10:
      case 36:
      case 37:
      case 42:
      case 43:
      case 44:
      case 45:
      case 50:
      case 51:
        return "background-color: white;";
      case 3:
      case 4:
      case 11:
      case 12:
      case 17:
      case 18:
      case 25:
      case 26:
        return "background-color: pink;";
      case 19:
      case 20:
      case 21:
      case 29:
      case 30:
      case 38:
      case 46:
        return "background-color: lime;";
      case 14:
      case 15:
      case 22:
      case 23:
        return "background-color: blue;";
      case 24:
      case 31:
      case 32:
        return "background-color: skyblue;";
      case 27:
      case 28:
      case 35:
        return "background-color: red;";
      case 5:
      case 6:
      case 7:
      case 8:
      case 13:
      case 16:
      case 33:
      case 34:
      case 41:
      case 49:
      case 52:
      case 57:
      case 58:
      case 59:
      case 60:
        return "background-color: black;";
      case 39:
      case 40:
      case 47:
      case 48:
      case 53:
      case 54:
      case 55:
      case 56:
      case 61:
      case 62:
      case 63:
      case 64:
        return "background-color: yellow;";
      default:
        return "";
    }
  }}
`;

const Image = () => {
  const gridItems = [];
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      const cellNumber = (row - 1) * 8 + col;
      gridItems.push(
        <GridCell key={cellNumber} cellNumber={cellNumber}>
          {/* 숫자를 숨김 처리 */}
          <div style={{ display: "none" }}>{cellNumber}</div>
        </GridCell>
      );
    }
  }

  return <ImageBlock>{gridItems}</ImageBlock>;
};

export default Image;
