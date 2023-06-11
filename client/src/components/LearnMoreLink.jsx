import React from 'react'
import {BsArrowRight} from "react-icons/all"
import { Link } from 'react-router-dom'
const LearnMoreLink = ({link, className}) => {
  return (
    <Link to={link} className={`nav-link w-fit-content fs-5 d-flex align-items-center gap-2 text-primary ${className || ""}`}>
        <span className="text-capitalize">learn more</span>
        <BsArrowRight className="fs-6" />
    </Link>
  )
}

export default LearnMoreLink
