interface Props {
  human: {
    image: string
    name: string
    status: string
    country: string
    text: string
  }
}

export default function Gallery({
  human: { image, name, status, country, text },
}: Props) {
  return (
    <div className="flex-col justify-center p-5 text-center space-x-20">
      <img className="p-5 w-96 h-96" src={image} alt={name} />
      <div className="text-blue-500 text-5xl">{name}</div>
      <div className="py-5 text-3xl font-bold">{status}</div>
      <div className="py-5 text-center text-2xl">{country}</div>
      <div className="py-5 text-center text-4xl">{text}</div>
    </div>
  )
}
