import React from "react";
import Plx from "react-plx";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";

const BOXES_PER_ROW = 3;
const ROWS = 3;
const BOXES = [];

const COLORS = [
  [img1, img2, img3],
  [img4, img5, img6],
  [img7, img8, img9],
];

console.log(COLORS[0][1]);

for (let i = 0; i < ROWS; i++) {
  BOXES.push([]);
  for (let j = 0; j < BOXES_PER_ROW; j++) {
    const top = i < ROWS / 2;
    const yFactor = top ? -1 : 1;
    const left = j < BOXES_PER_ROW / 2;
    const xFactor = left ? -1 : 1;
    const inside = (i === 1 || i === 2) && (j === 1 || j === 2);
    const scaleFactor = inside ? 0.5 : 1;
    const start = inside ? 40 : 100;
    const offset = inside ? 40 : 100;
    const rotationFactor = Math.random() > 0.5 ? 180 : -180;

    // const color = COLORS[i * ROWS + j];

    BOXES[i].push({
      data: [
        {
          start: "self",
          startOffset: "40vh",
          duration: 500,
          name: "first",
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            },
            {
              startValue: 0,
              endValue: Math.random() * rotationFactor,
              property: "rotate",
            },
            {
              startValue: 1,
              endValue: 1 + Math.random() * scaleFactor,
              property: "scale",
            },
            {
              startValue: 0,
              endValue: (start + Math.random() * offset) * xFactor,
              property: "translateX",
              unit: "%",
            },
            {
              startValue: 0,
              endValue: (start + Math.random() * offset) * yFactor,
              property: "translateY",
              unit: "%",
            },
          ],
        },
      ],
      // style: {
      //   backgroundImage: color,
      // },
    });
  }
}

export default class Explosion extends React.Component {
  renderBoxes() {
    const boxes = [];

    BOXES.forEach((row, index) => {
      row.forEach((box, boxIndex) => {
        boxes.push(
          <Plx
            key={`${index} ${boxIndex}`}
            className="Explosion-box"
            style={{ backgroundImage: `url(${COLORS[index][boxIndex]})` }}
            parallaxData={box.data}
          />
        );
      });
    });

    return boxes;
  }

  render() {
    return <div className="Explosion">{this.renderBoxes()}</div>;
  }
}
