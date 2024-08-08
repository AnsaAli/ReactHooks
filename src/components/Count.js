import React from 'react'

 const Count = ({text, count}) => {
    console.log(`Rendering ${text} count is ${count}`)
  return (
   <div> {text} is {count} </div>
  )
}
export default React.memo(Count)