interface Props {
  wall: {
    label: string
    image: string
    textHeader: string
    textMainPart: string
    textDescription: string
  }
  index: number
}

export default function Wall({
  wall: { label, image, textHeader, textMainPart, textDescription },
  index,
}: Props) {
  const inverted = index % 2

  return (
    <div
      className={`flex p-4 ${
        inverted ? 'flex-col-reverse' : 'flex-col'
      } sm:flex-row`}
    >
      <div className="justify-left flex items-center p-5 text-3xl sm:flex-col lg:flex-row">
        <div className="flex-col">
          <div className={` text-blue-500  p-2 ${inverted ? 'hidden' : ''}`}>
            {textHeader}
          </div>
          <div className={` p-2 ${inverted ? 'hidden' : ''}`}>
            {textMainPart}
          </div>
          <div className={` p-2 ${inverted ? 'hidden' : ''}`}>
            {textDescription}
          </div>
        </div>

        <img className="aspect-w-1 w-96 h-72" src={image} alt={label} />
        <div className="flex-col">
          <div className={` text-blue-500 p-2 ${inverted ? '' : 'hidden'}`}>
            {textHeader}
          </div>
          <div className={` p-2 ${inverted ? '' : 'hidden'}`}>
            {' '}
            {textMainPart}
          </div>
          <div className={` p-2 ${inverted ? '' : 'hidden'}`}>
            {textDescription}
          </div>
        </div>
      </div>
    </div>
  )
}
