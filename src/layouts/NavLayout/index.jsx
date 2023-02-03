const NavLayout = ({ children }) => {
  return (
    <main className="w-full z-10 h-[10vh] p-6 flex flex-row items-center dark:bg-[#0E1117] dark:text-white bg-[#E2E8F0] text-[#1B202D]  justify-between">
      {children}
    </main>
  );
};
export default NavLayout;
