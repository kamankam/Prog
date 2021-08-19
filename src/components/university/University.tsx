import { UniversityCard } from 'components'
import { university_logo } from 'data'

function University() {
  return (
    <div className="flex flex-col bg-gray-200">
      <div className="hidden p-10 text-center text-lg font-bold sm:block">
        Мы сотрудничаем более чем с
        <div className="text-blue-300">
          200 ведущими университетами и компании
        </div>
        <div className="flex flex-row justify-center p-6 space-x-20">
          {university_logo.map((logo) => (
            <UniversityCard image={logo.image} alt={logo.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default University
