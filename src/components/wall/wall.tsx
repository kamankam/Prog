import { WallCard } from 'components'
import { walls_logo } from 'data'

function Wall() {
  return (
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
  )
}

export default Wall
