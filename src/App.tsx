import {
  Business,
  Gallery,
  GoalsCard,
  Header,
  Main,
  UniversityCard,
  WallCard,
  Work,
} from 'components'
import { business, goals_logo, university_logo, walls_logo } from 'data'

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <div>
        <div className="flex flex-col bg-gray-200">
          <div className="hidden p-10 text-center text-lg font-bold sm:block">
            Мы сотрудничаем более чем с
            <div className="text-blue-300">
              200 ведущими университетами и компании
            </div>
            <div className="flex flex-row justify-center space-x-20">
              {university_logo.map((logo) => (
                <UniversityCard image={logo.image} alt={logo.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center p-10 text-4xl font-bold">
          Добейтесь своих целей с Coursera
        </div>
        <div className="flex-auto flex-row">
          <div className="flex">
            {goals_logo.map((goal) => (
              <GoalsCard goal={goal} />
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
            <WallCard wall={wall} index={index} />
          ))}
        </div>
      </div>

      <Gallery />

      <div>
        <h1>ih'ih'ih'hoih</h1>
        <div>
          {business.map((company) => (
            <Business image={company.image} label={company.label} />
          ))}
        </div>
      </div>
    </>
  )
}
