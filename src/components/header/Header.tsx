import { HeaderMenu as Menu } from 'components'
import { useStore } from 'effector-react'
import {
  $isSearchVisible,
  $searchValue,
  setSearchValue,
  setSearchVisible,
} from 'models/search'
import { useState } from 'react'
import { CourseraLogo } from 'resources'
import { CloseIcon } from './Menu'

export default function Header() {
  const [mobileLayout] = useState(true)

  return <>{mobileLayout ? <MobileLayout /> : <DesktopLayout />}</>
}

function MobileLayout() {
  const isSearchVisible = useStore($isSearchVisible)

  const handleOnSearchClick = () => {
    setSearchVisible(true)
  }

  return (
    <div className="border-grey-200 flex items-center justify-between m-4 border-b-2">
      <Menu />
      <img className="w-21 m-3 h-7" src={CourseraLogo} alt="logo_coursera" />
      <button onClick={handleOnSearchClick}>
        <SearchIcon />
      </button>
      {isSearchVisible && (
        <div className="absolute left-0 top-0 w-full bg-white">
          <SearchHeader />
        </div>
      )}
    </div>
  )
}

// todo: add css styles
function SearchHeader() {
  const searchValue = useStore($searchValue)

  const handleOnSearchClick = () => {
    setSearchVisible(false)
  }

  return (
    <div className="relative flex w-full h-20">
      <button className="ml-4" onClick={() => console.log('handle search')}>
        <SearchIcon />
      </button>

      <input
        className="block w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
        placeholder="What do you want to learn?"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button className="ml-auto mr-4" onClick={handleOnSearchClick}>
        <CloseIcon />
      </button>
    </div>
  )
}

// todo: pass color
function SearchIcon({ color = 'grey' }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  )
}

function DesktopLayout() {
  return (
    <div className="border-grey-200 flex items-center m-4 border-b-2 md:justify-between lg:justify-start">
      <div className="flex space-x-4">
        <button
          className="lg:active:bg-gray-300 lg:active:text-blue-700 flex align-middle text-center md:justify-center md:h-10 md:text-gray-200 md:bg-blue-700 md:rounded-sm lg:w-28 lg:bg-blue-600"
          type="button"
          aria-label="like"
        >
          Изучить
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-0.5 w-4 h-4"
            fill="none"
            viewBox="-7 -10 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <input
          className="lg:focus:border-black lg:focus:ring-1 lg:focus:ring-black lg:focus:outline-none lg:placeholder-gray-700 text-center lg:py-1.5 lg:w-64 lg:text-black lg:border lg:border-gray-700 lg:rounded-sm"
          type="text"
          placeholder="Чему вы хотите научиться?"
        />
        <div className="flex items-center lg:text-gray-700">
          <button className="px-5" type="button" aria-label="like">
            Для организаций
          </button>
          <button className="px-5" type="button" aria-label="like">
            Для студентов
          </button>
          <button className="lg:text-blue-700" type="button" aria-label="like">
            Войти
          </button>
        </div>
        <button
          className="lg:active:bg-gray-200 lg:active:text-blue-700 lg:justify-center lg:w-60 lg:h-10 lg:text-gray-200 lg:bg-blue-700"
          aria-label="like"
        >
          Присоедениться бесплатно
        </button>
      </div>
    </div>
  )
}
