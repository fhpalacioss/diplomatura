import React from 'react'

const Novedades = ({title,subtitle,image,body}) => {

      console.log(title,subtitle,image,body)


      image = image.replace("<img src=","").replace("/>","").replace(/\'/g, "")
  return (
    <div className='novedades'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        
        <div >
          <p>{body}</p>
        </div>
        {
          image != "" ? <img src={image} className="imgHistory"/> : <div></div>
        }
        
    </div>
  )
}

export default Novedades