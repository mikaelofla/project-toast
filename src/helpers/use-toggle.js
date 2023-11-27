import React from "react";

function useToggle(initialValue=false) {
    if(typeof initialValue!=='boolean') {
        console.warn('Invalid type for useToggle');
    }

    const [value,setValue] = React.useState(initialValue);

    const updateValue = React.useCallback(()=> {
        setValue(!value);

    },[value]);

    return [value,updateValue];

}

export default useToggle;