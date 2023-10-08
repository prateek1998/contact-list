import ToggleSwitch from "../toggleSwitch"

const Header = () => {
  return (
    <header className="h-16 bg-orange-200 dark:bg-orange-800 flex items-center justify-center">
      <h2 className="text-xl md:text-3xl font-bold text-orange-700 dark:text-orange-200 capitalize">Contact list app</h2>
      <div className="absolute right-0 mr-2">
        <ToggleSwitch />
      </div>
    </header>
  )
}

export default Header
