const Img = require("../../asset/pic.png");
export default function Header() {
  return (
    <header className=" bg-gradient-to-r from-slate-900 to-slate-700 h-screen w-screen pt-20 md:flex lg:flex md:flex-row-reverse lg:flex-row-reverse">
      <div className=" flex items-center justify-center md:flex-1 lg:flex-1">
        <img
          src={Img}
          alt="profile pic"
          className=" w-80 h-80  z-0 max-sm:w-52 max-sm:h-52 grayscale-0 mt-52 bg-orange-400 rounded-full mb-32 max-sm:m-auto max-sm:item-end"
        />
      </div>
      <div className=" md:flex lg:flex flex-col md:justify-center md:items-end md:flex-1 lg:flex-1">
        <div>
          <h2 className=" text-2xl text-white max-sm:text-center mt-10 ">
            Hi!, I'm
          </h2>
          <h1 className=" text-5xl text-orange-600 font-bold max-sm:text-center mt-5">
            John Rey
          </h1>
          <h2 className="  text-5xl mt-12  font-bold text-orange-600 max-sm:text-center">
            <span className="text-white font-thin">I am a</span> Software
            Developer
          </h2>
        </div>
      </div>
    </header>
  );
}

{
  /* <div className=" flex flex-1 justify-end items-center max-sm:flex max-sm:items-start max-sm:mb-40">
        <div>
          <h2 className=" text-5xl font-bold text-white typing">Hi! I'm</h2>
          <h1 className="text-7xl  font-bold text-orange-500">John Rey</h1>
          <h2 className=" text-5xl mt-20  font-bold text-orange-500 typing">
            <span className="text-white">I am a</span> Software Developer
          </h2>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={Img}
          className=" w-80 h-80 grayscale-0 mt-52 bg-orange-400 rounded-full mb-32 max-sm:m-auto max-sm:item-end"
          alt="logo"
        />
      </div> */
}
