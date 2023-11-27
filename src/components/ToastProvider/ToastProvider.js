import React from 'react';
import useEscapeKey from '../../hooks/use-escapeKey';
import useGenId from '../../helpers/use-id';


export const ToastContext = React.createContext();

function ToastProvider({children}) {
  
  const [toastType, setToastType] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const [newToast, setNewToast] = React.useState({ id: '', toastType: '', message: '', isShown: false });
  const [allToasts,setAllToasts] =React.useState([]);


  const  dismissAllToasts = React.useCallback(()=> {
   

      setAllToasts([])
    
    
  },[]
  );
  
  
  useEscapeKey(dismissAllToasts)  


  function Icon({ icon }) {
    const clonedIcon = React.cloneElement(icon, {
      size: 20,
      strokeWidth: 1.5,
    });
    return (
      <>
        {clonedIcon}
      </>
    )
  }

  function IconProp({ icon: Ikon }, variant) {
    return (
      <>
        <Ikon />
      </>
    )
  }

  function createToast(toastType, message) {
    const genId = crypto.randomUUID(); //useGenId();
    /*let msgObj = () => {
      return ({ id: genId, toastType, message, isShown: true })
    };*/
    let msgObj  ={ id: genId, toastType, message, isShown: true }
    setNewToast(current => msgObj)
    // setAllToasts(...allToasts,msgObj)
    console.log('in provider - ' + JSON.stringify(msgObj))

  }

  function closeToast (wrapperId) {
    //toggleToast(false)
    //alert(`pop message new - ` + Object.values(allToasts).find(parent).toString())

    const nextToasts = allToasts.filter((toast) => {
      return toast.id !== wrapperId;
    });

    setAllToasts(nextToasts);

  }

  return (
    <ToastContext.Provider value={{
      toastType, setToastType,
      message, setMessage,
      newToast, setNewToast,
      allToasts,setAllToasts,
      createToast,
      closeToast,
      Icon,IconProp
    }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
