import React from 'react'
import { UserNameContext, UserPlaceContext } from '../App';

 const ContextProblem1 = () => {
   
  return (
    <div>
        <UserNameContext.Consumer>
            {
                useName =>{
                    return(
                        <UserPlaceContext.Consumer>
                            {
                                userPlace =>{
                                    return(
                                        <div> user name is {useName}, plce is {userPlace} </div>
                                    )
                                }
                            }
                        </UserPlaceContext.Consumer>
                    )
                }
            }

        </UserNameContext.Consumer>

     
    </div>
  )
}
export default ContextProblem1;
