interface Props {
  wall: {
    text: string
    image: string
    label: string
  }
  index: number
}

export default function Wall({ wall: { text, image, label }, index }: Props) {
  const inverted = index % 2

  return (
    <div
      className={`flex p-4 ${
        inverted ? 'flex-col-reverse' : 'flex-col'
      } sm:flex-row`}
    >
      <div className={` text-blue-700 p-2 ${inverted ? 'hidden' : ''}`}>
        {text}
      </div>
      <img className="w-96 h-64" src={image} alt={label} />
      <div className={`text-red-700  p-2 ${inverted ? '' : 'hidden'}`}>
        {text}
      </div>
    </div>
  )
}
