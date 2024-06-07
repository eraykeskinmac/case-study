const Navbar = ({ children }: any) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[250px_1fr]">
      Navbar
      <div className="flex flex-col rounded-xl m-2 bg-[#FCFCFC] border-[0.5px]">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
