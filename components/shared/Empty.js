import Link from 'next/link'
import React from 'react'

const Empty = ({text, linkText, url}) => {
  return (
    <div className='boxshadow-2 center flex-col empty'>

      <h2>{text}</h2>

      <Link href={url} ><a className="nav-link">{linkText}</a></Link>
    </div>
  )
}

export default Empty