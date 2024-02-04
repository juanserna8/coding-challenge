/*-----------------------------------------------------------
 * @name countSamplesPerDay
 * @description Exports a function that calculates the number of samples sent each day of the week 
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
 * @name countSamplesPerDay
 * @description Calculate the amount of samples sent by day of the week  
 *
 * @param {Array} cleanedData - Array of samples cleaned and processed with standarized data
 *
 * 
 * @returns {Object} - Returns an object where each property corresponds to a day of the week,
 *  and their value represents the number of records created on that day
 */
export function countSamplesPerDay(dataCleaned) {
    
    // Initialize an object to store counts for each day
    const dayCounts = {
        Sunday: 0,
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0
    }

    // Iterate through the array of objects
    dataCleaned.forEach(data => {
        // Extract day of the week from the "Date" property
        const dayOfWeek = new Date(data.Date).toLocaleDateString('en-AU', { weekday: 'long' });

        // Increment the count for the corresponding day
        dayCounts[dayOfWeek]++;
    })

    return dayCounts;
}

/* = End of Functions = */
/* =============================================<<<<< */