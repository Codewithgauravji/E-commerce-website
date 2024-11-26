import React from "react";
import ChildComponents from "./ChildComponents";
function ParentComponents(){
    return(
        <div>
            <h1>Welcome to Props Example</h1>
            <ChildComponents name="Gaurav" age={20} status="true"/>
        </div>
    );
}
export default ParentComponents