import logo from "./Image/Coursera.png";

export default function Header() {
  return (
    <div>
      <div className="flex items-center md:justify-between lg:justify-start border-b-2 border-grey-200 m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="  lg:hidden h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <img className="h-7 w-21 m-3" src={logo} alt="logo_coursera" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 lg:hidden "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <div className=" sm:hidden lg:flex space-x-4">
          <button
            className=" lg:w-20 md:h-10  lg:active:bg-gray-200  lg:active:text-blue-700 md:bg-blue-700 md:justify-center md:rounded-sm md:text-gray-200"
            type="button"
            aria-label="like"
          >
            Изучить
          </button>
          <input
            className="lg:w-64 lg:focus:border-black lg:focus:ring-1 lg:focus:ring-black lg:focus:outline-none lg:text-black lg:placeholder-gray-700 lg:border lg:border-gray-700 lg:rounded-sm  lg:py-1.5 "
            type="text"
            placeholder="Чему вы хотите научиться?"
          />
          <div className="flex items-center  lg:text-gray-700 ">
            <button className="px-5" type="button" aria-label="like">
              Для организаций
            </button>
            <button className="px-5 " type="button" aria-label="like">
              Для студентов
            </button>
            <button
              className="lg:text-blue-700 "
              type="button"
              aria-label="like"
            >
              Войти
            </button>
          </div>
          <button
            className="lg:active:bg-gray-200  lg:active:text-blue-700 lg:bg-blue-700 lg:justify-center lg:w-60 lg:h-10  lg:text-gray-200 "
            aria-label="like"
          >
            Присоедениться бесплатно
          </button>
        </div>
      </div>
    </div>
  );
}
