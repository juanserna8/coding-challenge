/*-----------------------------------------------------------
 * @name breakDownFlavoursByKind
 * @description Exports a function that breaks down the flavours by kind of product 
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
 * @name breakDownFlavoursByKind
 * @description Determine the kind of flavours by product that are present in the data base.  
 *
 * @param {Array} cleanedData - Array of samples cleaned and processed for State property
 * 
 * @returns {Object} - Returns an object where the keys  represent the kinds of products, 
 * and the values are arrays containing the distinct flavors associated with each kind of product.
 */

export function breakDownFlavoursByKind(dataCleaned) {
    let flavorsByKind = {};

    dataCleaned.forEach(product => {
        // Assign to variable kindOfProduct what is in the first leg of State property
        // Assign to variable flavor what is in the second leg of State property
        let [kindOfProduct, flavor] = product.Sample.split(' - ');
        // Remove unnecessary spaces of the strings to each variable
        kindOfProduct = kindOfProduct.trim();
        flavor = flavor?.trim();
    
        // Create the object of each flavour with a set, in which the flavours will be stored
        // in the future
        if (!flavorsByKind[kindOfProduct]) {
          flavorsByKind[kindOfProduct] = new Set();
        }
    
        // Check if the flavor is not already in the array for the kind of product, and if that's the case
        // include that flavour into the array of that kind of product 
        flavorsByKind[kindOfProduct].add(flavor);
        
      });
    
    return flavorsByKind;
}

/* = End of Functions = */
/* =============================================<<<<< */