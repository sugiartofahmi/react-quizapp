const CardLayout = ({ children }) => {
  return (
    <main className="p-10 max-w-[100vh] min-w-[70vh] h-auto min-h-[30vh]  flex flex-col justify-center items-center  dark:bg-[#0E1117] dark:text-white bg-[#E2E8F0] text-[#1B202D] ">
      {children}
    </main>
  );
};
export default CardLayout;
