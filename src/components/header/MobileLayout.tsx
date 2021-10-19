import { HeaderMenu as Menu } from 'components'
import { SearchHeader, SearchIcon } from 'components/header'
import { useStore } from 'effector-react'
import { $isSearchVisible, setSearchVisible } from 'models/search'
import { CourseraLogo } from 'resources'

export default function MobileLayout() {
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
