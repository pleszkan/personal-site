import React from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll'

/**
 * Delays the execution of the animation on each element by a set prefix times by the position.
 * This can create an effect where each child element appears after eachother.
 *
 * :param delay: How much time to wait after each item in milliseconds.
 */
export default function AnimationDelayer({ delay = 200, children, ...props }) {
  return (
    <>
      {children.map((child, index) => (
        <AnimationOnScroll
          delay={delay * index}
          {...props}
        >
          {React.cloneElement(child)}
        </AnimationOnScroll>
      ))}
    </>
  )
}
