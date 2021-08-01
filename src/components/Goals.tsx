interface Props {
  goal: {
    image: string
    label: string
    text: string
  }
}

export default function GoalsCards({ goal: { image, label, text } }: Props) {
  return (
    <div className="flex-1 flex-col items-center justify-center p-5">
      <img className="w-22 p-5 h-20" src={image} alt={label} />
      <div className="justify-center text-center">{text}</div>
    </div>
  )
}
