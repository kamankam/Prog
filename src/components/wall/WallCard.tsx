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

export default function WallCard({
  wall: { label, image, textHeader, textMainPart, textDescription },
  index,
}: Props) {
  const inverted = index % 2

  return (
    <div
      className={`flex p-4 ${
        inverted ? 'flex-col-reverse' : 'flex-col'
      } flex-row`}
    >
      <div className="justify-left flex items-center p-5 space-x-10 sm:flex-col lg:flex-row">
        <div className="flex-col">
          <div
            className={` text-blue-500 text-xl p-5 ${inverted ? 'hidden' : ''}`}
          >
            {textHeader}
          </div>
          <div className={` text-4xl p-5 ${inverted ? 'hidden' : ''}`}>
            {textMainPart}
          </div>
          <div className={` text-3xl p-5 ${inverted ? 'hidden' : ''}`}>
            {textDescription}
          </div>
        </div>

        <img
          className="sm:w-3/4 sm:h-3/5 lg:w-2/6 lg:h-3/5"
          src={image}
          alt={label}
        />
        <div className="flex-col">
          <div
            className={`text-blue-500 text-xl p-5 ${inverted ? '' : 'hidden'}`}
          >
            {textHeader}
          </div>
          <div className={`text-4xl p-5 ${inverted ? '' : 'hidden'}`}>
            {' '}
            {textMainPart}
          </div>
          <div className={`text-3xl p-5 ${inverted ? '' : 'hidden'}`}>
            {textDescription}
          </div>
        </div>
      </div>
    </div>
  )
}
