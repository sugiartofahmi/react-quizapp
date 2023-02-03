const ContentLayout = ({ children }) => {
  return (
    <main className="w-full h-full flex flex-row  justify-center items-center dark:bg-[#1B202D] dark:text-white bg-[#FEFEFF] text-[#20202D]">
      {children}
    </main>
  );
};
export default ContentLayout;
