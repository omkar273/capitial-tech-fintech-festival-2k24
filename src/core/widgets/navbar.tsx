const NavBar = () => {
  return (
    <div className="w-full px-[6%] py-4 flex justify-center gap-16 font-sans text-lg capitalize text-gray-500 fixed">
      <p className="cursor-pointer hover:scale-105">home</p>
      <p className="cursor-pointer hover:scale-105">screens</p>
      <p className="cursor-pointer hover:scale-105">tools</p>
    </div>
  );
};

export default NavBar;
