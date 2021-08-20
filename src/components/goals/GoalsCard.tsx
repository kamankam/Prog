interface Props {
  goal: {
    image: string
    label: string
    text: string
  }
}

export default function GoalsCards({ goal: { image, label, text } }: Props) {
  return (
    <div className="flex-1 p-5">
      <div className="flex justify-center">
        <img className="w-22 p-4 h-20" src={image} alt={label} />
      </div>
      <div className="text-center">{text}</div>
    </div>
  )
}
