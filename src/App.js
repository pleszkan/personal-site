import styles from 'App.module.scss'
import Heading from 'components/heading/Heading'
import NavBar from 'components/navigation/NavBar'

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Heading />
    </div>
  )
}

export default App
