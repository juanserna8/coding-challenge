/*-----------------------------------------------------------
 * @name cleanData
 * @description Exports a function that cleans the data fetched from the API  
 * and standarize in each of the records' properties
 *
 * @author 
 * @version 0.1.0
 *----------------------------------------------------------- */

/* =============================================>>>>>
=  Constants  =
===============================================>>>>> */

// TODO: Create a constants file

/* = End of Constants = */
/* =============================================<<<<< */

/* =============================================>>>>>
=  Functions  =
===============================================>>>>> */

/**
 * @name cleanData
 * @description Map accross all the data stored in Local Storage (LS)  
 *
 * @param {Array} storedData - Data stored in LS
 * 
 * @returns {Object} - Clean entries of array stored in LS
 */
export function cleanData(storedDataString){

    // const processedData = JSON.parse(storedDataString)
    
    return storedDataString.map((entry) => {
        const cleanedState = cleanState(entry.State)

        return {
            Date: entry.Date,
            FirstName: entry.FirstName,
            LastName: entry.LastName,
            Postcode: entry.Postcode,
            Sample: entry.Sample,
            State: cleanedState,
        }
    })	
}

/**
 * @name cleanState
 * @description Standarizes State values
 *
 * @param {Object} - State of array
 *
 * @returns {String} - an standarized value for each state
 * @throws Too many requests, Server Errors
 */
export function cleanState(state){

    // Convert the state to lowercase for case-insensitive matching
    const lowercaseState = state.toLowerCase()
    // Logic to standardize state values
    if (lowercaseState.includes('vic') || lowercaseState.includes('melbourne')) {
        return 'Victoria';
    } else if (lowercaseState.includes('nsw') || lowercaseState.includes('new') ||lowercaseState.startsWith('n') ) {
        return 'New South Wales';
    } else if (lowercaseState.includes('tas') || lowercaseState.includes('hob')) {
        return 'Tasmania';
    } else if (lowercaseState.includes('south') || lowercaseState === 'sa' ) {
        return 'South Australia';
    } else if (lowercaseState.includes('queen') || lowercaseState.includes('qld')) {
        return 'Queensland';
    } else if (lowercaseState.includes('west') || lowercaseState === 'wa') {
        return 'Western Australia';
    } else if (lowercaseState.includes('act') || lowercaseState.includes('australian')) {
        return 'Australian Capital Territory';
    }
    
  return state;
}


/* = End of Functions = */
/* =============================================<<<<< */