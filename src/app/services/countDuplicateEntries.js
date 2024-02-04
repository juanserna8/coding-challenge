/*-----------------------------------------------------------
 * @name countDuplicateEntries
 * @description Exports a function that calculates the number of duplicate samples existing in the data received 
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
 * @name countDuplicateEntries
 * @description Calculate the amount of records per state  
 *
 * @param {Array} cleanedData - Array of samples cleaned and processed for State property
 *
 * 
 * @returns {Object} - Returns the duplicate values with the number of occurrences
 */
export function countDuplicateEntries(dataCleaned) {
    // // Initialize a new Set where the duplicates will be stored
    // const uniqueIdentifiers = new Set();
    // // Define the structure of the set
    // const duplicateInfo = {
    //     count: 0,
    //     values: [],
    // };

    // Iterate for each object or record of the array dataCleaned
    // for (const obj of dataCleaned) {
    //     // Declare an identifier for each record. In this scenario,
    //     // I believe that the properties Date, FirstName and LastName are the most appropiate ones
    //     // So the identifier are those properties concatenated
    //     const identifier = `${obj.Date}-${obj.FirstName}`;
    
    //     // Check if any record of the Set has the current identifier of the itaration 
    //     if (uniqueIdentifiers.has(identifier)) {
    //         // If the identifier already exists in the set, add one record
    //         // duplicateInfo.count++;
    //         // Push the record to the values array
    //         // duplicateInfo.values.push(obj);
    //         return true
    //     }
    //     uniqueIdentifiers.add(identifier)
    // }

    
    let identifierCounts = {};

    // Iterate through the array
    dataCleaned.forEach(entry => {
        // Convert relevant fields to lowercase and trim spaces
        // let date = entry.Date.trim().toLowerCase();
        let firstName = entry.FirstName.trim().toLowerCase();
        let lastName = entry.LastName.trim().toLowerCase();
        // Create a unique identifier by concatenating Date, FirstName, and LastName
        let identifier = `${firstName}-${lastName}`;
  
      // Check if the identifier already exists in the counts object
      if (identifierCounts[identifier]) {
        // If it exists, increment the count
        identifierCounts[identifier]++;
      } else {
        // If it doesn't exist, initialize the count to 1
        identifierCounts[identifier] = 1;
      }
    });
  
    // Filter out identifiers with counts greater than 1 (duplicates)
    let duplicates = Object.keys(identifierCounts).filter(identifier => identifierCounts[identifier] > 1);
  
    // Return an object with duplicate identifiers and their counts
    return duplicates.map(identifier => ({ identifier, count: identifierCounts[identifier] }))
}

/* = End of Functions = */
/* =============================================<<<<< */