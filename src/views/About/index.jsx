const About = () => {
  return (
    <>
      <section className=" w-full h-screen dark:text-white text-black pt-10">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
              Belajar Tata Surya Bersama Gibran
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
              <img
                className="w-full mx-auto sm:max-w-xs"
                src="./gibran.jpeg"
                alt=""
              />
            </div>

            <div className="flex md:flex-col flex-row  ">
              <h3 className="text-lg font-semibold ">
                Nama : Gibran Farras Ibadurrahman
              </h3>
              <h3 className="text-lg font-semibold ">NIM : 41037006200072</h3>
              <h3 className="text-lg font-semibold ">Kelas : A2</h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
