interface Props {
  image: string
  label: string
}

export default function Business({ image, label }: Props) {
  return (
    <div className="flex flex-row">
      <h1>ih'ih'ih'hoih</h1>
      <img className="w-32 h-32" src={image} alt={label} />
    </div>
  )
}
