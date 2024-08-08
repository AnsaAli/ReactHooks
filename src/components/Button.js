import React from 'react'

 const Button = ({handleClick , children}) => {
    console.log('Rendering button and the children is ', children)
    //children refer to prop.children refer to corresponding text increment Age/increment Salary
  return (
    <button onClick={handleClick}>
        {children} 
    </button>
  )
}
export default React.memo(Button);