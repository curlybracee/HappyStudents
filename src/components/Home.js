import React, { useContext } from "react";
import { UserfContext } from "../context/userState";
import { Login } from "./Login";
import{ReactComponent as HeroWall} from '../heroWall.svg'

export const Home = () => {
  const { isToken } = useContext(UserfContext);

  return (
    <div className="d-flex flex-column">
        <div className="mb-5"><HeroWall/></div>
      <div className="mt-5"> {!isToken ? <Login /> : null}</div>
      
     
     
    </div>
  );
};
