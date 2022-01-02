import React, {createContext} from "react";



const BioData = createContext();

const ComA = () => {
    return (
        <BioData.Provider value={"Hassan Khan"}>
        </BioData.Provider>
    )
}

export default ComA
export { BioData};