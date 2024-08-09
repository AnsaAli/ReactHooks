import React, { useContext } from "react";
import { UserNameContext, UserPlaceContext } from "../App";

const UseContextHook = () => {
  const name = useContext(UserNameContext);
  const place = useContext(UserPlaceContext);
  return <div>{name} from {place}</div>;
};
export default UseContextHook;
