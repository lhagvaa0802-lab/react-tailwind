// import Image from "next/image";

// import { Ultra } from "next/font/google";

export default function Home() {
  // return <Double number={5} />;
  return <ColorList />;
}

// const Double = (props) => {
//   return <span>{props.number * 2}</span>;
// };

const colors = ["Coffea", "Tea", "Water"];

const ColorList = () => (
  <ul>
    {colors.map((color, index) => (
      <li key={index}>{color}</li>
    ))}
  </ul>
);
