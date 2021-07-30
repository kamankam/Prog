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
    <div className="flex-1 flex-col content-center justify-center p-5 text-center">
      <img className="min-h-96 min-w-96 p-5" src={image} alt={name} />
      <div className="text-blue-500 text-5xl">{name}</div>
      <div className="py-5 text-3xl font-bold">{status}</div>
      <div className="py-5 text-center text-2xl">{country}</div>
      <div className="py-5 text-center text-4xl">{text}</div>
    </div>
  )
}
