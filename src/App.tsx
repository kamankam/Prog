import {
  Goals,
  Header,
  Main,
  University,
  Wall,
  Work,
  Gallery,
} from 'components'
import { goals_logo, university_logo, walls_logo, human_logo } from 'data'

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
        <div className="flex flex-col bg-gray-200">
          <div className="hidden p-10 text-center text-lg font-bold sm:block">
            Мы сотрудничаем более чем с{' '}
            <div className="text-blue-300">
              200 ведущими университетами и компании
            </div>
            <div className="flex flex-row justify-center space-x-20">
              {university_logo.map((logo) => (
                <University image={logo.image} alt={logo.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex p-10 text-4xl font-bold">
          Добейтесь своих целей с Coursera
        </div>
        <div className="p-22 grid sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex space-x-20">
            {goals_logo.map((goal) => (
              <Goals goal={goal} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Work />
      </div>
      <div className="p-10">
        <div className="mb-10 text-center text-3xl font-bold">
          Лучшее в мире обучение, доступное во всех уголках земного шара
        </div>
        <div>
          {walls_logo.map((wall, index) => (
            <Wall wall={wall} index={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex text-5xl font-bold">Из сообщества Coursera</div>
        <div className="flex text-3xl">
          Более 77 миллионов человек уже учатся на Coursera
        </div>
        <div className="flex-raw flex">
          {human_logo.map((human) => (
            <Gallery human={human} />
          ))}
        </div>
      </div>
    </div>
  )
}
