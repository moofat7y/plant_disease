import React from 'react'

const Section = ({className, containerClassName, children}) => {
  return (
    <section className={(className)? className :""}>
      <div className={(containerClassName)? containerClassName : ""}>
        {children}
      </div>
    </section>
  )
}

export default Section;
