import { GalleryCard } from 'components'
import { human_logo } from 'data'
import { useState } from 'react'

function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-3xl font-bold">Из сообщества Coursera</div>
      <div className="flex text-2xl">
        Более 77 миллионов человек уже учатся на Coursera
      </div>
      <div className="flex items-center">
        <button
          className="focus:bg-green-700"
          onClick={() => {
            setCurrentPhoto(currentPhoto === 4 - 1 ? 0 : currentPhoto - 1)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20"
            viewBox="0 0 20 20"
            fill="blue"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex">
          {human_logo.map((human, index) => (
            <div>
              {index === currentPhoto && (
                <GalleryCard human={human} index={index} />
              )}
            </div>
          ))}
        </div>
        <button
          className="focus:bg-green-700"
          onClick={() => {
            setCurrentPhoto(
              currentPhoto === human_logo.length - 1 ? 0 : currentPhoto + 1
            )
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 stroke-2"
            viewBox="0 0 20 20"
            fill="blue"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Gallery
