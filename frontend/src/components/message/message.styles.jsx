const DEFAULT_ALERT_COLOR_INFO = '#29d2e4';
const DEFAULT_ALERT_COLOR_SUCCESS = '#8bc34a';
const DEFAULT_ALERT_COLOR_WARNING = '#f87d09';
const DEFAULT_ALERT_COLOR_DANGER = '#e91e63';

const closeIconBeforeAndAfter = {
  content: '""',
  position: 'absolute',
  top: '8px',
  width: '15px',
  height: '2px',
  right: 0
}

const alert = {
  backgroundColor: DEFAULT_ALERT_COLOR_INFO,
  border: `1px solid ${DEFAULT_ALERT_COLOR_INFO}`,
  color: '#fff',
  padding: '15px 2px'
};

export const alertIcon = {
  float: 'left',
  marginRight: '15px'
};

export const alertTitle = {
  margin: '0 10px 0 0',
  textTransform: 'uppercase',
  fontWeight: 'normal',
  fontSize: '14px'
};


export const alertInfo = {
  ...alert,
}

export const alertSuccess = {
  ...alert,
  backgroundColor: `${DEFAULT_ALERT_COLOR_SUCCESS}`,
  border: `1px solid ${DEFAULT_ALERT_COLOR_SUCCESS}`
}

export const alertWarning = {
  ...alert,
  backgroundColor: `${DEFAULT_ALERT_COLOR_WARNING}`,
  border: `1px solid ${DEFAULT_ALERT_COLOR_WARNING}`
}

export const alertDanger = {
  ...alert,
  backgroundColor: `${DEFAULT_ALERT_COLOR_DANGER}`,
  border: `1px solid ${DEFAULT_ALERT_COLOR_DANGER}`
}

export const alertContainer = {
  position: 'relative',
  maxWidth: '100%',
  margin: '0 auto',
  paddingLeft: '50px',
  paddingRight: '30px'
}

export const alertCloseIcon = {
  float: 'right',
  color: '#000',
  marginTop: 0,
  marginLeft: 0,
  width: '21px',
  height: '21px',
  position: 'relative',
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  textIndent: '-999px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  '&:before': {
    ...closeIconBeforeAndAfter,
    backgroundColor: '#fff',
    transform: 'rotate(-45deg)'
  },

  '&:after': {
    ...closeIconBeforeAndAfter,
    backgroundColor: '#fff',
    transform: 'rotate(45deg)'
  }
}
