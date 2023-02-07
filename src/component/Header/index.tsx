const Img = require("../../asset/pic.png");
export default function Header() {
  return (
    <header className=" h-screen w-screen flex lg:flex-row max-sm:flex-col-reverse max-sm:justify-start ">
      <div className=" flex flex-1 justify-center items-center max-sm:flex max-sm:items-start max-sm:mb-40">
        <div>
          <h2 className=" text-5xl  font-bold text-yellow-600 typing">
            Hi! I'm
          </h2>
          <h1 className="text-7xl  font-bold text-orange-500">John Rey</h1>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-end">
        <img
          src={Img}
          className=" w-100 h-1/2 grayscale-0 bg-orange-300 mb-32 max-sm:mb-12 max-sm:rounded-full lg:rounded-none"
          alt="logo"
        />
      </div>
    </header>
  );
}
