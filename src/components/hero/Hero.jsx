import { AnimationOnScroll } from 'react-animation-on-scroll'

import Button, { ROLES } from 'components/common/Button'

import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.heading}>
        <div className={styles.left}>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animatePreScroll={true}
            animateOnce={true}
            duration={0.5}
          >
            <h1>Full-stack developer</h1>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animatePreScroll={true}
            animateOnce={true}
            duration={0.5}
            delay={200}
          >
            <h2>
              I help people and organizations reach their goals by designing and
              materializing user friendly and easy to use products.
            </h2>
            <div className={styles.buttonGroup}>
              <Button
                label="Contact me"
                role={ROLES.CALL_TO_ACTION}
              />
              <Button
                label="View my work"
                role={ROLES.NORMAL}
              />
            </div>
          </AnimationOnScroll>
        </div>
        {/* <div className={styles.right}>
          <img
            alt="Person"
            src={process.env.PUBLIC_URL + '/man.png'}
            className={styles.img}
          />
        </div> */}
      </div>
    </div>
  )
}
