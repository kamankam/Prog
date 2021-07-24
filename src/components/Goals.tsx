interface Props {
  image: string
  label: string
  text: string
}

export default function Goals({ image, label, text }: Props) {
  return (
    <div className=" flex flex-col ">
      <img className=" " src={image} alt={label} />
      <div className="text-center">{text}</div>
    </div>
  )
}
