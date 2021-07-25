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
      <div className="justify-left flex items-center p-5 text-3xl sm:flex-col lg:flex-row">
        <div className={` p-2 ${inverted ? 'hidden' : ''}`}>{text}</div>
        <img className="aspect-w-1 w-96 h-72" src={image} alt={label} />
        <div className={` p-2 ${inverted ? '' : 'hidden'}`}>{text}</div>
      </div>
    </div>
  )
}
