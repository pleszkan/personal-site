import { useEffect } from 'react'
import { useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const onCheckboxChange = e => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
    setTheme(e.target.checked ? 'dark' : 'light')
  }

  return (
    <input
      type="checkbox"
      value={`${theme === 'dark'}`}
      onChange={onCheckboxChange}
    />
  )
}
