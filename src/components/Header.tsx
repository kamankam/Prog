import { useState } from 'react'
import { CourseraLogo } from 'resources'

export default function Header() {
  return (
    <div className="relative">
      <div className="border-grey-200 relative flex items-center min-w-full bg-red-700 border-b-2 sm:fixed sm:justify-between md:fixed md:justify-between lg:justify-start">
        <Menu />
        <img className="m-3 w-20 h-8" src={CourseraLogo} alt="logo_coursera" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-6 lg:hidden"
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
        <div className="space-x-4 sm:hidden lg:flex">
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
            <button
              className="lg:text-blue-700"
              type="button"
              aria-label="like"
            >
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
    </div>
  )
}

function Menu() {
  //const storeMenu = useStore(Menustatus)
  const [showMenu, setToggleMenu] = useState(false)

  const handleOnClick = () => {
    setToggleMenu(!showMenu)
  }

  return (
    <>
      <div className="bg-yellow-600"></div>
      <button onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {showMenu && (
        <div className="absolute left-0 top-20 w-full bg-gray-500">
          <MenuSection data={menuSectionData1} />
          <MenuSection data={menuSectionData2} />
        </div>
      )}
    </>
  )
}

const menuSectionData1: SectionData = {
  title: 'Цели',
  items: [
    { label: 'Пройти бесплатный курс', icon: false },
    { label: 'Получите диплом' },
    { label: 'Пройти бесплатный курс', icon: false },
    { label: 'Получите диплом' },
    { label: 'Пройти бесплатный курс', icon: false },
    { label: 'Получите диплом' },
    { label: 'Пройти бесплатный курс', icon: false },
    { label: 'Получите диплом' },
    { label: 'Пройти бесплатный курс', icon: false },
    { label: 'Получите диплом' },
    { label: 'Пройти бесплатный курс', icon: false },
    { label: 'Получите диплом' },
    { label: 'Пройти бесплатный курс', icon: false },
    { label: 'Получите диплом' },
    { label: 'jyflyfluyf', icon: false },
    { label: 'Получите диплом' },
  ],
}
const menuSectionData2: SectionData = {
  title: 'Темы',
  items: [{ label: 'Наука о данных' }, { label: 'Бизнес' }],
}

type SectionData = {
  title?: string
  items: {
    icon?: boolean
    label: string
  }[]
}

interface MenuSectionProps {
  data: SectionData
}

function MenuSection({ data: { title = '', items = [] } }: MenuSectionProps) {
  if (!items.length) return null

  return (
    <div className="border-grey-200 relative flex-col mr-4 max-w-full h-full border-t">
      {title && (
        <div className="relative pb-4 pl-4 pr-0 pt-5 w-full h-full font-bold bg-yellow-700 overflow-scroll">
          {title}
        </div>
      )}
      {items.map(({ label, icon = true }) => {
        return (
          <div>
            <div className="flex p-4 pr-1 w-full h-full bg-yellow-600 overflow-y-scroll">
              <div>{label}</div>
              {icon && (
                <button className="ml-auto">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>ChevronRight</title>
                    <polygon
                      transform="translate(33.0000000, 6.000000) scale(-1, 1)"
                      points="0 16 14.585 32 15.999 30.586 2.828 16 15.999 1.415 14.585 0"
                    ></polygon>
                  </svg>
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
