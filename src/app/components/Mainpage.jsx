import Image from "next/image";

const Mainpage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full lg:flex-row flex-col py-10 justify-between gap-7">
        <div className="flex md:justify-center w-full">
          <Image
            className="rounded-xl md:w-full"
            src="/aleyraaa.png"
            priority={true}
            width={1000}
            height={1000}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col md:w-full gap-12 md:text-base text-xs">
          <div className="flex flex-row bg-gray-800 rounded-xl text-white h-10 items-center justify-between md:p-10 p-5">
            <h1 className=" text-gray-600">Name:</h1>
            <h1 className="md:font-semibold ">Ariel Setiawan </h1>
          </div>
          <div className="flex flex-row bg-gray-800 rounded-xl text-white h-10 items-center justify-between md:p-10 p-5">
            <h1 className=" text-gray-600">Based in:</h1>
            <h1 className=" md:font-semibold">Indonesia </h1>
          </div>
          <div className="flex flex-row bg-gray-800 rounded-xl text-white h-10 items-center justify-between md:p-10 p-5">
            <h1 className="text-gray-600">Email:</h1>
            <h1 className="md:font-semibold">arielsetiawan22@gmail.com </h1>
          </div>
          <div className="flex flex-row bg-gray-800 rounded-xl text-white h-10 items-center justify-between md:p-10 p-5">
            <a
              href="https://github.com/aleynusa"
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="md:w-7 md:h-7 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.facebook.com/ariel.nakexpo/"
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="md:w-7 md:h-7 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/viezcenleyy/"
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-instagram md:w-7 md:h-7 w-5 h-5 "
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:w-full">
          <div className="flex flex-col items-start bg-gray-800 rounded-xl text-white py-5 px-5">
            <h1 className="font-bold m-3 text-xl">About</h1>
            <p className=" text-gray-400 m-3 text-justify">
              {" "}
              Hi! My name is Ariel Setiawan, you can call me Aley. I am very
              enthusiastic about exploring new things, and I am also adaptable
              to changes. I am always calm and composed in solving coding
              problems. Currently, I am focusing on learning about websites and
              databases. I really enjoy learning and researching new things,
              spending a lot of time in front of the computer.
              <br />
              <br />
              Sometimes I also have a strong passion for design, such as logo
              design, animations, and more. I thoroughly enjoy learning graphic
              design, especially UI/UX design.
            </p>
          </div>
          <div className="flex flex-col md:flex-row p-14 gap-10 justify-between">
            <div className=" text-center items-start bg-gray-800 rounded-xl text-white p-7">
              <h1 className="text-2xl font-semibold"> +2 </h1>
              <h1 className="text-gray-400 mt-2"> Years Experience </h1>
            </div>
            <div className=" text-center items-start bg-gray-800 rounded-xl text-white p-7">
              <h1 className="text-2xl font-semibold"> +17 </h1>
              <h1 className="text-gray-400 mt-2"> Completed Projects </h1>
            </div>
            <div className=" text-center items-start bg-gray-800 rounded-xl text-white p-7">
              <h1 className="text-2xl font-semibold"> +24 </h1>
              <h1 className="text-gray-400 mt-2"> Satisfied Clients </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
