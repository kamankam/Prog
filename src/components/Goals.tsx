interface Props {
  goal: {
    image: string
    label: string
    text: string
  }
}

export default function Goals({ goal: { image, label, text } }: Props) {
  return (
    <div className="flex-1 flex-col items-center justify-center p-5">
      <img
        className="min-h-32 min-w-32 max-w-32 p-5 max-h-32"
        src={image}
        alt={label}
      />
      <div className="justify-center text-center">{text}</div>
    </div>
  )
}
