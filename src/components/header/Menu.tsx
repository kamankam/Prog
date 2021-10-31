import { useStore } from 'effector-react'
import { $isMenuHeaderVisible, setMenuHeaderVisible } from 'models/header_menu'
import { CourseraLogo } from 'resources'
import { CloseIcon } from '.'

export default function Menu() {
  const isMenuHeaderVisible = useStore($isMenuHeaderVisible)

  const handleOnMenuClick = () => {
    setMenuHeaderVisible(true)
  }

  return (
    <>
      <button onClick={handleOnMenuClick}>
        <OpenMenuIcon />
      </button>
      {isMenuHeaderVisible && (
        <div className="absolute left-0 top-0 w-full bg-white">
          <MenuHeader />
          <MenuSection data={sectionDataA} />
          <MenuSection data={sectionDataB} />
          <MenuSection data={sectionDataC} />
          <MenuSection data={sectionDataD} />
        </div>
      )}
    </>
  )
}

function MenuHeader() {
  const handleOnCloseClick = () => {
    setMenuHeaderVisible(false)
  }

  return (
    <div className="relative flex w-full h-20">
      <img
        className="w-21 absolute bottom-0 left-0 right-0 top-0 m-3 mx-auto my-auto h-7"
        src={CourseraLogo}
        alt="logo_coursera"
      />
      <button className="ml-auto mr-4" onClick={handleOnCloseClick}>
        <CloseIcon />
      </button>
    </div>
  )
}

type SectionData = {
  title?: string
  items: {
    icon?: boolean
    name: string
  }[]
}

interface MenuSectionProps {
  data: SectionData
}

function MenuSection({ data: { title = '', items = [] } }: MenuSectionProps) {
  if (!items.length) return null

  return (
    <div className="border-grey-200 flex-row mr-4 border-t">
      {title && <div className="pb-4 pl-4 pr-0 pt-5 font-bold">{title}</div>}
      {items.map(({ name, icon = true }) => {
        return (
          <div className="flex p-4 pr-1 w-full">
            <div>{name}</div>
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
        )
      })}
    </div>
  )
}

// Menu Section Data
const sectionDataA: SectionData = {
  items: [
    { name: 'For Enterprise', icon: false },
    { name: 'For Students', icon: false },
  ],
}
const sectionDataB: SectionData = {
  title: 'Goals',
  items: [
    { name: 'Take a free course', icon: false },
    { name: 'Earn a Degree' },
    { name: 'Earn a Certificate' },
    { name: 'Launch of advance your career' },
  ],
}
const sectionDataC: SectionData = {
  title: 'Subjects',
  items: [
    { name: 'Data Science' },
    { name: 'Business' },
    { name: 'Computer Science' },
    { name: 'Information Technology' },
    { name: 'Language Learning' },
    { name: 'Health' },
    { name: 'Personal Development' },
    { name: 'Physical Science and Engineering' },
    { name: 'Social Science' },
    { name: 'Art and Humanities' },
    { name: 'Math and Logic' },
  ],
}
const sectionDataD: SectionData = {
  title: '',
  items: [{ name: 'Browse all subjects', icon: false }],
}

const OpenMenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
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
)
