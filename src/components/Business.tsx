interface Props {
  image: string
  label: string
}

export default function Business({ image, label }: Props) {
  return (
    <div className="flex flex-row">
      <img className="w-32 h-32" src={image} alt={label} />
    </div>
  )
}
