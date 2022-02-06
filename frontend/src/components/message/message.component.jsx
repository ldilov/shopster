/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

import { FaInfoCircle, FaCheck, FaExclamationTriangle, FaExclamationCircle } from 'react-icons/fa';
import {
  alertDanger,
  alertInfo,
  alertSuccess,
  alertWarning,
  alertContainer,
  alertIcon,
  alertCloseIcon, alertTitle
} from './message.styles';
import { useState } from 'react';


export const TYPES = {
  INFO: 'Info',
  WARNING: 'Warning',
  DANGER: 'Danger',
  SUCCESS: 'Success'
};

const Icons = {
  [TYPES.INFO]: <FaInfoCircle/>,
  [TYPES.SUCCESS]: <FaCheck/>,
  [TYPES.WARNING]: <FaExclamationTriangle/>,
  [TYPES.DANGER]: <FaExclamationCircle/>,
};

const Message = ({content, type}) => {
  const [isVisible, setIsVisible] = useState(true);

  let styleType = null;
  let styleIcon = null;
  let title = null;

  switch (type) {
    case TYPES.WARNING:
      styleType = alertWarning;
      styleIcon = Icons[TYPES.WARNING];
      title = 'warning';
      break;
    case TYPES.SUCCESS:
      styleType = alertSuccess;
      styleIcon = Icons[TYPES.SUCCESS];
      title = 'success';
      break;
    case TYPES.DANGER:
      styleType = alertDanger;
      styleIcon = Icons[TYPES.DANGER];
      title = 'error';
      break;
    default:
      styleType = alertInfo;
      styleIcon = Icons[TYPES.INFO];
      title = 'info';
      break;
  }

  return (
      <>
        {
          isVisible
              ? (
                  <div css={ styleType }>
                    <div css={ alertContainer }>
                      <div css={ alertIcon }>
                        { styleIcon }
                      </div>
                      <button type="button" css={ alertCloseIcon } data-dismiss="alert" aria-label="Close"
                              onClick={ () => setIsVisible(false) }>
                        <span>clear</span>
                      </button>
                      <b css={ alertTitle }>{ title }:</b> { content }
                    </div>
                  </div>
              )
              : null
        }
      </>
  );
};

export default Message;
