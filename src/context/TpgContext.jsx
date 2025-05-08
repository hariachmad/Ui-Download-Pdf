import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "./AuthContext";

export const TpgContext = createContext();

export const TpgProvider = ({ children }) => {

    const [tpg,setTpg]= useState([]);
    // const {idk} = useContext(AuthContext);

    // // const fetchData = async ()=> {
    // //     try {
    // //         const response = await axios.get(`http://157.230.38.147:4000/tpg/${idk}`, {
    // //             headers: {
    // //               'Authorization': `Bearer parametrik`
    // //             }
    // //           });
    // //         console.log(response.data);
    // //         setTpg(response.data);
    // //     } catch (error) {
    // //         console.error("Error fetching data : ",error);
    // //     }
            
    // // }

    // // useEffect(()=>{
    // //   fetchData();
    // // },[])

  return (
    <TpgContext.Provider value={{tpg,setTpg}}>
      {children}
    </TpgContext.Provider>
  );
};
