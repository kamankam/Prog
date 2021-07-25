interface Props {
  human: {
    image: string
    name: string
  }
}

export default function Gallery({ human: { image, name } }: Props) {
  return (
    <div className="flex-col justify-center space-x-20">
      <img className="p-5 w-60 h-48" src={image} alt={name} />
      <div className="p-5 w-60 h-48 text-blue-500 text-3xl">{name}</div>
    </div>
  )
}
