export default function DesktopLayout() {
  return (
    <div className="border-grey-200 flex items-center m-4 border-b-2 sm:hidden md:justify-between lg:flex lg:justify-start">
      <div className="flex space-x-4">
        <button
          className="lg:active:bg-gray-300 lg:active:text-blue-700 flex align-middle text-center md:justify-center md:h-10 md:text-gray-200 md:bg-blue-700 md:rounded-sm lg:w-28 lg:bg-blue-600"
          type="button"
          aria-label="like"
        >
          Изучить
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-0.5 w-4 h-4"
            fill="none"
            viewBox="-7 -10 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <input
          className="lg:focus:border-black lg:focus:ring-1 lg:focus:ring-black lg:focus:outline-none lg:placeholder-gray-700 text-center lg:py-1.5 lg:w-64 lg:text-black lg:border lg:border-gray-700 lg:rounded-sm"
          type="text"
          placeholder="Чему вы хотите научиться?"
        />
        <div className="flex items-center lg:text-gray-700">
          <button className="px-5" type="button" aria-label="like">
            Для организаций
          </button>
          <button className="px-5" type="button" aria-label="like">
            Для студентов
          </button>
          <button className="lg:text-blue-700" type="button" aria-label="like">
            Войти
          </button>
        </div>
        <button
          className="lg:active:bg-gray-200 lg:active:text-blue-700 lg:justify-center lg:w-60 lg:h-10 lg:text-gray-200 lg:bg-blue-700"
          aria-label="like"
        >
          Присоедениться бесплатно
        </button>
      </div>
    </div>
  )
}
