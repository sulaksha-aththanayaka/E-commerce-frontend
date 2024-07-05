import React from 'react'

function ItemPopup({showItem, img, type, name, price, description}) {
  return (
    <div className='bg-red-400'>
        <h1>Item desc</h1>
        <img src={img}/>
        <p className='text-white'>{description}</p>
        {console.log(description)}
        <button onClick={showItem}>Dissapear</button>
    </div>
  )
}

export default ItemPopup