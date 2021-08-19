import React, { useState } from 'react'

interface Props {
  human: {
    id: number
    image: string
    name: string
    status: string
    country: string
    text: string
  }
  index: number
}

function Profile() {
  const [currPhoto, setCurrPhoto] = useState(0)
}

export default function GalleryCard({
  human: { id, image, name, status, country, text },
  index,
}: Props) {
  return (
    <div className="flex-1 flex-col content-center justify-center p-5 text-center">
      <img
        className="items-center justify-center w-48 h-48"
        src={image}
        alt={name}
      />
      <div className="py-2 text-blue-500 text-2xl">{name}</div>
      <div className="py-2 text-base font-bold">{status}</div>
      <div className="py-2 text-center text-base border-b-2 border-blue-500">
        {country}
      </div>
      <div className="py-5 text-center text-lg">{text}</div>
    </div>
  )
}
