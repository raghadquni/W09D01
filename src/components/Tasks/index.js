import React, { useState } from "react";

function Tasks() {

    const logOut = () => {
        localStorage.clear();
        window.location.reload(false)
    }
    return (
        <>
        <h1> Your Tasks </h1>
        <button onClick={logOut}> logOut </button>

        </>
    )
}
export default Tasks;
