import React from "react";

const useEscapeKey = ((fx) => {
    // Code to dismiss all toasts
    

    React.useEffect(()=>{
        function handleKeydown(event) {
            if(event.code==="Escape") {
                fx()  
            }
        }


        window.addEventListener('keydown',handleKeydown);
        console.log('escape')
        return function cleanup()  {
            window.removeEventListener('keydown',handleKeydown)
        }

    },[fx])
});

export default useEscapeKey;