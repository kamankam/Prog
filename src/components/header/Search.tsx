import { SearchIcon } from 'components/header'
import { useStore } from 'effector-react'
import { $searchValue, setSearchValue, setSearchVisible } from 'models/search'
import { CloseIcon } from '.'

// todo: add css styles
export default function SearchHeader() {
  const searchValue = useStore($searchValue)

  const handleOnSearchClick = () => {
    setSearchVisible(false)
  }

  return (
    <div className="relative flex w-full h-20">
      <button
        className="aspect-w-20 aspect-h-20 w-20 bg-blue-600"
        onClick={() => console.log('handle search')}
      >
        <SearchIcon color="white" />
      </button>

      <input
        className="block w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
        placeholder="What do you want to learn?"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button className="ml-auto mr-4" onClick={handleOnSearchClick}>
        <CloseIcon color="blue-600" />
      </button>
    </div>
  )
}
