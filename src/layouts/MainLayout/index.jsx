const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-full  flex flex-col  items-center dark:bg-[#1B202D] dark:text-white bg-[#FEFEFF] text-[#20202D] ">
      {children}
    </main>
  );
};
export default MainLayout;
