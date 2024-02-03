/*-----------------------------------------------------------
 * @name calculateMostPopularProduct
 * @description Exports a function that calculates the most popular product 
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
 * @name determineKindOfProducts
 * @description Determine the kind of products are present in the data base  
 *
 * @param {Array} cleanedData - Array of samples cleaned and processed for State property
 * 
 * @returns {Object} - Returns an object where the keys are the kinds of products 
 * and the values are arrays containing the objects belonging to that particular kind
 */

export function determineKindOfProducts(dataCleaned) {
    let groupedProducts = {};
    dataCleaned.forEach(product => {
        // Extract the kind of product from the 'Sample' property
        let kindOfProduct = product.Sample.split(' - ')[0].trim();

        // Check if the kind of product is already a key in groupedProducts
        if (!groupedProducts[kindOfProduct]) {
            // If not, create a new array for that kind of product
            groupedProducts[kindOfProduct] = [];
        }

        // Push the current product into the array for its kind of product
        groupedProducts[kindOfProduct].push(product);
    })

    return groupedProducts
}

/**
 * @name calculateMostPopularProduct
 * @description Find the kind of product with the highest number of occurrences  
 *
 * @param {Object} groupedProducts - Object that contains the kind of products
 * 
 * @returns {String} - Returns the name of the most popular product
 * 
*/
export function calculateMostPopularProduct(groupedProducts) {
    let mostPopularProduct = null;
    let maxCount = 0;

    // Iterate through the keys (kinds of products) in the groupedProducts object
    for (let kindOfProduct in groupedProducts) {
        // Check if the current kindOfProduct has more occurrences than the current maxCount
        if (groupedProducts[kindOfProduct].length > maxCount) {
            maxCount = groupedProducts[kindOfProduct].length;
            mostPopularProduct = kindOfProduct;
        }
    }

    return {
        mostPopularProduct: mostPopularProduct,
        itemsSold: maxCount
    };

    
}
/* = End of Functions = */
/* =============================================<<<<< */