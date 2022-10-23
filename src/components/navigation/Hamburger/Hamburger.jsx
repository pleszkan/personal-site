import { slide as Menu } from 'react-burger-menu'

export default function Hamburger({ isOpen, setIsOpen }) {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#fff',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#fff',
    },
    bmItemList: {
      color: '#000',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  }

  return (
    <Menu
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      right
      disableAutoFocus={true}
      customBurgerIcon={false}
      customCrossIcon={false}
      styles={styles}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      {/* <NavMenuItem label="Projects" />
      <NavMenuItem label="Projects" />
      <NavMenuItem label="Projects" /> */}
      <div>👀</div>
    </Menu>
  )
}
