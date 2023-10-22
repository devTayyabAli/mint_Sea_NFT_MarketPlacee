import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export const web3Context = React.createContext();

export const Web3ContextProvider = ({
    children,
}) => {

    const [ShowData, setShowData] = useState([])
    const [Filter_ShowData, setFilter_ShowData] = useState([])

    const [Spinner, setSpinner] = useState(false)
    const dispatch = useDispatch()
        

    return (
        <web3Context.Provider
            value={{
                setFilter_ShowData, Filter_ShowData, setSpinner, setShowData, ShowData, Spinner
            }}
        >
            {children}
        </web3Context.Provider>
    );
};
