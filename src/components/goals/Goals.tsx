import { GoalsCard } from 'components'
import { goals_logo } from 'data'

function Goals() {
  return (
    <div className="">
      <div className="flex justify-center p-10 text-4xl font-bold">
        Добейтесь своих целей с Coursera
      </div>
      <div className="flex flex-row">
        <div className="flex items-center">
          {goals_logo.map((goal) => (
            <GoalsCard goal={goal} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goals
