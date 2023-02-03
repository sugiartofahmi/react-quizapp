const CardLayout = ({ children }) => {
  return (
    <main className="p-10 mt-20 max-w-[100vh] min-w-[70vh]  h-[50vh] flex flex-col justify-center items-center dark:bg-[#0E1117] dark:text-white bg-[#E2E8F0] text-[#1B202D]  ">
      {children}
    </main>
  );
};
export default CardLayout;
