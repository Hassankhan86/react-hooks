import React,{ useContext } from "react";

import { BioData } from "./5.1-useContext ";

const Comc = ({name}) => {
    const channelName = useContext(BioData);
    return <h1>Hello Comc {channelName}</h1>
}

export default Comc

