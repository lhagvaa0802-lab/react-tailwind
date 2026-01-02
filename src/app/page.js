// import Image from "next/image";

// import { Ultra } from "next/font/google";

export default function Home() {
  const value = {
    profil: "/Profile.svg",
    name: "Sophie Benett",
    des: "Product Designer who focuses on simplicity & usability.",
    para1: "312",
    para2: "48",
  };
  return (
    <div className="flex">
      <ProfileCard1 props1={value} />
    </div>
  );
}

const ProfileCard1 = (props) => <ProfileCard2 props2={props.props1} />;
const ProfileCard2 = (props) => <ProfileCard3 props3={props.props2} />;

const ProfileCard3 = (props) => {
  return (
    <div
      className="mt-50 ml-20 mr-20 p-2 w-fit rounded-xl shadow=[5px 5px 15px rgba(173, 216, 230, 0.6), /* Light blue shadow */
-5px -5px 15px rgba(255, 255, 255, 0.8); /* White shadow */]"
    >
      <img src={props.props3.profil} alt="" />
      <div className="py-5 px-7">
        <div className="flex gap-3 pb-5">
          <h1 className="text-[22px]">{props.props3.name}</h1>
          <img src="/Icon.svg" alt="" />
        </div>
        <p className="w-51 text-[15px] text-gray-500">{props.props3.des}</p>
      </div>
      <div className="flex place-content-between p-6 items-center">
        <div className="flex gap-1 items-center">
          <img className="w-4 h-4" src="/icon1.svg" alt="" />
          <p>{props.props3.para1}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img className="w-4 h-4" src="/icon3.svg" alt="" />
          <p>{props.props3.para2}</p>
        </div>
        <button className="rounded-xl h-11 w-27 border-0 bg-gray-300 text-[15px]">
          Follow +
        </button>
      </div>
    </div>
  );
};
