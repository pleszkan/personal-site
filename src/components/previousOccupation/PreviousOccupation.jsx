import OccupationCard from 'components/previousOccupation/OccupationCard/OccupationCard'
import styles from './style.module.scss'
import classNames from 'classnames'
import AnimationDelayer from 'components/common/AnimationDelayer'

export default function PreviousOccupation() {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <h2>Projects and Work</h2>
          <p>
            Prototypes, Digital Products (Apps, Websites, SaaS solutions) and
            design systems which are visually pleasing, user-centric and easy to
            use.
          </p>
        </div>
        <div className={styles.cards}>
          <AnimationDelayer
            animateIn="animate__fadeIn"
            animatePreScroll={true}
            animateOnce={true}
            duration={0.5}
            delay={200}
          >
            <OccupationCard className={classNames(styles.card, styles.manzama)}>
              <span className={styles.title}>Diligent - Manzama</span>
              <span className={styles.subtitle}>
                News aggregation and analyzation
              </span>
              <img
                alt="Manzama - Diligent product"
                src={process.env.PUBLIC_URL + '/manzama.png'}
                className={styles.img}
              />
            </OccupationCard>
            <OccupationCard
              className={classNames(styles.card, styles.cloudera)}
            >
              <span className={styles.title}>Cloudera</span>
              <span className={styles.subtitle}>
                Automated performance testing and verification
              </span>
              <img
                alt="Generic Dashboard"
                src={process.env.PUBLIC_URL + '/dashboard.png'}
                className={styles.img}
              />
            </OccupationCard>
          </AnimationDelayer>
        </div>
      </div>
    </div>
  )
}
