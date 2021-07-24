import { GirlImage } from 'resources'

export default function Main() {
  return (
    <div className="flex justify-center  text-center  ">
      <div className=" p-10">
        <h1 className=" text-7xl break-normal whitespace-nowrap">
          Ваш путь к успеху
        </h1>
        <h3 className=" p-10  text-xl whitespace-nowrap">
          Развивайте навыки с помощью онлайн-курсов,
          <br />
          сертификаций и дипломных программ от
          <br />
          лучших университетов и компаний мира.
        </h3>
        <div className=" flex  justify-center ">
          <button
            className=" active:bg-gray-200  active:text-blue-700 bg-blue-700 w-60 h-10 rounded-sm text-gray-200"
            aria-label="like"
          >
            Присоедениться бесплатно
          </button>
        </div>
      </div>

      <div className="flex-auto lg:block hidden">
        <img className="md:rounded-full" src={GirlImage} alt="girl" />
      </div>
    </div>
  )
}
