interface Props {
  image: string
  alt: string
}

export default function UniversityCard({ image, alt }: Props) {
  return (
    <div>
      <img className="w-16 h-16" src={image} alt={alt} />
    </div>
  )
}
