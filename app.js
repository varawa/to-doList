import React from "react" ;
import ReactDom from "react-dom/client" ;

const heading = React.createElement("h1" ,
    {
        id:"title",
        key:"h1"
    }
    , "Heading1"
);

const root = ReactDom.createRoot(document.getElementById("root")) ;

root.render(heading)

