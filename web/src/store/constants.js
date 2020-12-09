// CODE: Temp

const TEMP = {
  SEND   : {
    FETCH      : 'TEMP_SEND_FETCH',
    CREATE     : 'TEMP_SEND_CREATE',
    MODIFY     : 'TEMP_SEND_MODIFY',
    ACTIVATE   : 'TEMP_SEND_ACTIVATE',
    REMOVE : 'TEMP_SEND_REMOVE',
  },
  SAVE   : {
    REPLACE    : 'TEMP_SAVE_FETCH',
    ADDTOP     : 'TEMP_SAVE_CREATE',
    ADDBOTTOM  : 'TEMP_SAVE_CREATE',
    MODIFY     : 'TEMP_SAVE_MODIFY',
    REMOVE     : 'TEMP_SAVE_REMOVE',
  },
  STATUS : {
    SUCCESS : 'TEMP_STATUS_SUCCESS',
    REQUEST : 'TEMP_STATUS_REQUEST',
    FAILED  : 'TEMP_STATUS_FAILED',
  },
}

export { TEMP }
