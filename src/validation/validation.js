

export function isArray(value, shouldReturn = false) {
  const checkTypeOfArgument = value.constructor === Array && Object.prototype.toString.call(value) === "[object Array]" &&
  Array.isArray(value);

  if (!checkTypeOfArgument) {
    if (shouldReturn) return false;
    else throw new Error("Value must be array");
    }

  return true;
}

export function isEmpty(value, shouldReturn = false) {
  const isEmpty = value.length === 0;

  if (isEmpty) {
    if (shouldReturn) return false;
    else throw new Error("Array length must be bigger than 0");
  }

  return true;
}

export function isNumber(value, shouldReturn = false) {
  const valuesToCheck =  typeof value === "number" && !isNaN(value)
  

  if (!valuesToCheck) {
    if (shouldReturn) return false;
    else throw new Error("Values must be a numbers and can not be NaN");
  }

  return true;
}

export function isPossitive(value, shouldReturn = false) {
  const valuesArePositive =  value >= 0

  if (!valuesArePositive) {
    if (shouldReturn) return false;
    else throw new Error("Values must be positive");
  }

  return true;
}

export function isString(value, shouldReturn = false) {
  const checkArgumentsType =  typeof value === "string"

  if (!checkArgumentsType) {
    if (shouldReturn) return false;
    else throw new Error("Values must be string");
  }

  return true;
}

export function isDate(value, shouldReturn = false) {
  const checkArgumentsType =  value instanceof Date

  if (!checkArgumentsType) {
    if (shouldReturn) return false;
    else throw new Error("Value must be Data");
  }

  return true;
}

export function isObject (value, shouldReturn = false){
  
  const valueToCheck =  typeof value === "object"

  if(!valueToCheck){
    if(shouldReturn) return true
    else throw new Error("Value must be a Object")
  }
  return true

}

export function isDataValueCorrect (value, shouldReturn = false ){
  
  const valueGetTime = value.getTime()
 
  if(!valueGetTime){
    if(shouldReturn) return true
    else throw new Error("Value must be date")
  }
  return true

}

export function isFunction (value, shouldReturn){

    const valueToCheck =   typeof value === "function"
    
   
    if(!valueToCheck){
      if(shouldReturn) return true
      else throw new Error("Callback must be function")
    }
   
    return true
}