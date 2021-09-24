import React from "react";


const Message = ({msg, bgColor}) =>{
    
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAling: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
    }
    
    return(
        <div style={styles}>
            <h2>{msg}</h2>
        </div>
    );
};

export default Message