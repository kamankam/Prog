import { GirlImage } from 'resources'

export default function Main() {
  return (
    <div className="flex justify-center text-center">
      <div className="p-10">
        <h1 className="break-normal whitespace-nowrap text-7xl">
          Ваш путь к успеху
        </h1>
        <h3 className="p-10 whitespace-nowrap text-xl">
          Развивайте навыки с помощью онлайн-курсов,
          <br />
          сертификаций и дипломных программ от
          <br />
          лучших университетов и компаний мира.
        </h3>
        <div className="flex justify-center">
          <button
            className="w-60 h-10 active:text-blue-700 text-gray-200 bg-blue-700 active:bg-gray-200 rounded-sm"
            aria-label="like"
          >
            Присоедениться бесплатно
          </button>
        </div>
      </div>

      <div className="hidden flex-auto lg:block">
        <img className="md:rounded-full" src={GirlImage} alt="girl" />
      </div>
    </div>
  )
}
