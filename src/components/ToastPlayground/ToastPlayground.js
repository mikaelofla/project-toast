import React from 'react';

import Button from '../Button';
//import Toast from '../Toast';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

//import useToggle from '../../helpers/use-toggle';

//import useGenId from '../../helpers/use-id';
import styles from './ToastPlayground.module.css';


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  //const [isShown, toggleToast] = useToggle();
  //const newToast = React.useContext(ToastContext)

  const {
    toastType, setToastType, 
    message, setMessage,
    createToast
  } = React.useContext(ToastContext)
   
  /*
  const genId = useGenId();
  let msgObj = React.useMemo(() => {
    return ({ id: genId, toastType, message, isShown: true })
  }, [genId, toastType, message]);
*/


  function handleSubmit(event) {
    event.preventDefault();
    /*    !isShown &&
          toggleToast(true)
    
    */
    if (message !== '' && message !== null) {

      createToast(toastType, message);
      //setNewToast(msgObj)
     /*setNewToast(currentToasts => currentToasts=msgObj )*/
      //console.log(JSON.stringify(msgObj))
      //alert(`push message "${message}" of type "${variant}"`)
      handleReset();
    }
  }

  function handleReset() {
    setToastType('notice')
    setMessage('')
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
      { /*
      <Toast variant={variant} message={message} isShown={isShown} toggleToast={toggleToast}/>
  */}
      <ToastShelf />
      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} className={styles.messageInput} />
            </div>
          </div>

          <div className={styles.row}>

            <div className={styles.label}>Variant</div>

            {VARIANT_OPTIONS.map((item) => (

              <div key={`variant-${item}`} className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <label htmlFor={`variant-${item}`}>
                  <input
                    id={`variant-${item}`}
                    type="radio"
                    name="variant"
                    value={item}
                    checked={item === toastType}
                    onChange={(event) => setToastType(event.target.value)}

                  />
                  {item}
                </label>
              </div>

            )

            )
            }

          </div>


          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default ToastPlayground;
