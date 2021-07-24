import { Goals, Header, Main, University, Wall, Work } from 'components'
import { goals_logo, university_logo, walls_logo } from 'data'

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <div className=" flex flex-col bg-gray-200 ">
          <div className=" text-center font-bold p-10 text-lg sm:block hidden">
            Мы сотрудничаем более чем с{' '}
            <div className="text-blue-300 ">
              200 ведущими университетами и компании
            </div>
            <div className=" flex flex-row space-x-20 justify-center">
              {university_logo.map((logo) => (
                <University image={logo.image} alt={logo.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" flex text-4xl font-bold p-10 ">
          Добейтесь своих целей с Coursera
        </div>
        <div className="grid lg:grid-cols-4 p-22 sm:grid-cols-2 ">
          <div className="flex space-x-20">
            {goals_logo.map((goal) => (
              <Goals image={goal.image} label={goal.label} text={goal.text} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Work />
      </div>
      <div>
        {walls_logo.map((wall, index) => (
          <Wall wall={wall} index={index} />
        ))}
      </div>
    </div>
  )
}
