import { useContext } from "react";
import { web3Context } from "./web3Context";

const useWeb3 = () => {
    const { setSpinner,setShowData,ShowData,Spinner,Filter_ShowData,setFilter_ShowData, } = useContext(web3Context);
    return {
      setSpinner,Filter_ShowData,setFilter_ShowData,setShowData,ShowData,Spinner
    };
};

export default useWeb3;
