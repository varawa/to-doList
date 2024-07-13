import React from "react" ;
import ReactDom from "react-dom/client" ;
import App from "./App";

const Body = () =>{
    return(
        <App/>
    );
}

const root = ReactDom.createRoot(document.getElementById("root")) ;

root.render(<Body/>) ;

