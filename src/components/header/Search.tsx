import { SearchIcon } from 'components/header'
import { useStore } from 'effector-react'
import { $searchValue, setSearchValue, setSearchVisible } from 'models/search'
import { CloseIcon } from './Menu'

// todo: add css styles
export default function SearchHeader() {
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
