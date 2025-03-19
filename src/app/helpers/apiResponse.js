export const successResponse = async (res, msg, data = {}) => {
    const resData = {
      status: 1,
      message: msg,
      data,
    }
    return res.status(200).json(resData)
  }
  
  export const validationResponse = async (res, msg, data = {}) => {
    const resData = {
      status: 0,
      message: msg,
      data,
    }
    return res.status(400).json(resData)
  }
  
  export const serverErrorResponse = async (res, msg) => {
    console.error('serverErrorResponse:', msg)
    const resData = {
      status: 0,
      message: msg,
    }
    return res.status(500).json(resData)
  }
  
  export const badRequestResponse = async (res, msg) => {
    console.error('badRequestrResponse:', msg)
    const resData = {
      status: 0,
      message: msg,
    }
    return res.status(400).json(resData)
  }
  
  export const notFoundResponse = async (res, msg) => {
    const resData = {
      status: 0,
      message: msg,
    }
    return res.status(404).json(resData)
  }
  
  export const unauthorizedResponse = async (res, msg) => {
    const resData = {
      status: 0,
      message: msg,
    }
    return res.status(401).json(resData)
  }
  
  export const successAuthResponse = async (
    res,
    msg,
    accessToken,
    refreshToken = {},
    loggedIn = '',
  ) => {
    const resData = {
      status: 1,
      message: msg,
      accessToken,
      refreshToken,
      loggedIn,
    }
    return res.status(200).json(resData)
  }
  
  export const forbiddenResponse = async (res, msg = {}) => {
    const resData = {
      status: 0,
      message: msg,
    }
    return res.status(403).json(resData)
  }
  