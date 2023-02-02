const About = () => {
  return (
    <>
      <section className=" w-full h-screen dark:text-white text-black pt-10">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="md:text-3xl text-xl text-center font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
              Belajar Tata Surya Bersama Gibran
            </h2>
          </div>

          <div className="flex justify-around md:text-xl text-lg md:flex-row flex-col mt-8 md:mt-20 gap-y-6 gap-x-10">
            <div>
              <img
                className="object-scale-down h-48 w-96 md:h-full md:w-full mx-auto sm:max-w-xs   hover:scale-125 rounded-full ease-in duration-300   "
                src="./gibran.png"
                alt=""
              />
            </div>

            <div className="flex flex-col justify-center items-center md:items-start ">
              <h3 className=" font-semibold ">
                Nama : Gibran Farras Ibadurrahman
              </h3>
              <h3 className="font-semibold ">NIM : 41037006200072</h3>
              <h3 className="font-semibold ">Kelas : A2</h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
