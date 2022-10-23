import styles from 'App.module.scss'
import Separator from 'components/common/Separator'
import Hero from 'components/hero/Hero'
import Hamburger from 'components/navigation/Hamburger'
import NavBar from 'components/navigation/NavBar'
import PreviousOccupation from 'components/previousOccupation/PreviousOccupation'
import { useState } from 'react'
import 'animate.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div id="outer-container">
      <Hamburger
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main id="page-wrap">
        <div className={styles.app}>
          <NavBar
            menuIsOpen={isOpen}
            openMenu={() => setIsOpen(true)}
          />
          <Hero />
          <Separator />
          <PreviousOccupation />
          <Separator />
        </div>
      </main>
    </div>
  )
}

export default App
