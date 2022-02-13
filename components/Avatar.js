import React from 'react'

function Avatar({url, className}) {
  return (<img 
      loading="lazy" 
      className={`h-10 rounded-full transition duration-150 cursor-pointer transform hover:scale-110 ${className}`}
      src={url} 
      alt="profile pic"
    />)
}

export default Avatar;