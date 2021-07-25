export default function Work() {
  return (
    <div className="flex max-h-full bg-blue-200">
      <div className="grid justify-items-center px-12 sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex-raw flex">
          <div className="-mt-2">
            <img
              src={
                'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=2&w=606&h=553&q=40'
              }
              alt="working_people"
            />
          </div>
        </div>
        <div className="sm:px-32 lg:px-2">
          <h1 className="p-5 text-left text-5xl">
            Результаты учащихся на Coursera
          </h1>
          <h3 className="p-5 text-left text-xl">
            {'  '}{' '}
            <div className="font-bold">87% людей, которые обучаются </div> для
            повышения квалификации,{' '}
            <div className="font-bold">
              {' '}
              сообщают о таких карьерных преимуществах,
            </div>{' '}
            как повышение по службе, рост зарплаты или получение новой должности
          </h3>
          <h3 className="p-5 text-left text-xl">
            Опрос по результатам учащихся Coursera (2019)
          </h3>

          <button
            className="flex justify-center w-60 h-10 active:text-blue-700 text-gray-200 bg-blue-700 active:bg-gray-200 border border-blue-700 rounded-sm"
            aria-label="like"
          >
            Присоедениться бесплатно
          </button>

          <div>
            <button
              className="flex justify-center w-72 h-10 active:text-blue-700 text-blue-700 active:bg-blue-700 bg-white border border-blue-700 rounded-sm"
              aria-label="like"
            >
              Попробуйте Coursera для бизнеса
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
