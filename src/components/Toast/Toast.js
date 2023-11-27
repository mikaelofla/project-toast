import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { ToastContext } from '../ToastProvider';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};


//function Toast({ variant, message, toggleToast }) {
function Toast({ variant, message, wrapperId }) {

  const {closeToast, Icon, IconProp} = React.useContext(ToastContext)

  const IconTag = ICONS_BY_VARIANT[`${variant}` || `notice`];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <VisuallyHidden>
+         {variant} -
+       </VisuallyHidden>
        {/*<Icon icon={<IconTag />} />
        ---
  */}
        <IconProp icon={IconTag} />

      </div>
      <p className={styles.content}>
        {message || 'message tbd'}
      </p>
      <button className={styles.closeButton} 
      onClick={()=>closeToast(wrapperId)}
      aria-label="Dismiss message"
      aria-live="off"
      >
        
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
