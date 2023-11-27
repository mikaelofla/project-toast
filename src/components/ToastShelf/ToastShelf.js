import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const {newToast,allToasts,setAllToasts} = React.useContext(ToastContext)
  //const isEmpty = Object.keys(newToast).length === 0;
  //newToast.length();

  /*let toastArray = React.useMemo(()=>[
  ],[])*/

  React.useEffect(() => {
    console.log(`UE newToast - ${JSON.stringify(Object.values(newToast))}`)
    //const {id,variant, message} = newToast;

    //console.log(`(before) UE toastArray - ${JSON.stringify(toastArray)}`)
    console.log(`(before) UE allToasts State - ${JSON.stringify(allToasts)}`)
    if(newToast.id!=='') {
      setAllToasts([...allToasts,newToast])
    }
    
    //console.log(`(after) UE toastArray - ${JSON.stringify(toastArray)}`)
    console.log(`(after) UE allToasts State - ${JSON.stringify(allToasts)}`)

  },[newToast])

 

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"

    >
      {allToasts.map(({ id, toastType, message, isShown }) => (
         isShown &&
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={toastType} message={message} wrapperId={id}/>
          </li>
      ))

      }
    </ol>
  );
}

export default React.memo(ToastShelf);
