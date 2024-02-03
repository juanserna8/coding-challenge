/*-----------------------------------------------------------
 * @name countStatesPersample
 * @description Exports a function that calculates the number of samples sent to each state 
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
 * @name countStatesPersample
 * @description Calculate the amount of records per state  
 *
 * @param {Array} cleanedData - Array of samples cleaned and processed for State property
 * @param {String} state - string of the state that we want to count
 * 
 * @returns {Number} - Returns the number of samples sent to each state
 */
export function countStatesPersample(dataCleaned, state) {
    return dataCleaned.filter(item => {
        // Check if 'item.State' is a string before using 'startsWith'
        return typeof item.State === 'string' && item.State.startsWith(state);
    }).length;
}

/* = End of Functions = */
/* =============================================<<<<< */