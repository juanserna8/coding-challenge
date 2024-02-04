/*-----------------------------------------------------------
 * @name samplerRequests
 * @description Exports a function to call the api for sample requests 
 * and retrieve the data to be stored in local storage
 *
 * @author 
 * @version 0.1.0
 *----------------------------------------------------------- */

/* =============================================>>>>>
=  Imports  =
===============================================>>>>> */

/* = End of Imports = */
/* =============================================<<<<< */

/* =============================================>>>>>
=  Constants  =
===============================================>>>>> */

// TODO: Create a constants file
const apiUrl='https://bulk-nutrients-admin-git-feature-code-challenge-bulk-nutrients.vercel.app/api/code-challenge'
const tooManyRequestsError = 'Failed to fetch'

/* = End of Constants = */
/* =============================================<<<<< */

/* =============================================>>>>>
=  Functions  =
===============================================>>>>> */

/**
 * @name callSampleRequestsApi
 * @description Executes a GET http query to the sample Requests api
 *
 * @param {String} page - The page to be retrieved
 * @param {Int} limit - The number of records in every request
 *
 * @returns {Object[]} - The Array of sample Requests
 * @throws Too many requests, Server Errors
 */
export async function callSampleRequestsApi(page=1, limit=50){

	// Use fetch api to retrieve the data
	const response = await fetch(`${apiUrl}?page=${page}&limit=${limit}`)
	const sampleRequests = await response.json()

	// Handle Limit of pages exceeded
	if ( sampleRequests.includes('Page cannot be more than total pages') ){
		return null // null means the end of the dataset. Stop calling it
	}

	return sampleRequests
}

/**
 * @name GetAllSampleRequests
 * @description Iterates over the sampleRequests pages to return the entire data set
 *
 *
 * @returns {Promise} - The Array of the entire dataset of sample Requests
 * @throws Too many requests, Server Errors
 */
export async function getAllSampleRequests(){

	// Iterate over the api calls
	const samples = []
	let page = 1
	while (true) {
		try {
			const nextBatch = await callSampleRequestsApi(page)

			// If null is returned, last page reached, return
			if(!nextBatch) { // null returned
				return samples
			}

			samples.push(...nextBatch)
			page++

			// Assumption: When page reaches 8 or multiples of 8, await for 60 seconds to avoid API flooding
			if (page%8 == 0) {
				await new Promise((resolve) => setTimeout(resolve, 60000))
			}
		} catch (error) {
			if(error.message.includes(tooManyRequestsError)) {
				// Too many requests. Unexpected errors
				await new Promise((resolve) => setTimeout(resolve, 60000))
			} else {
				// Server Error.
				throw error
			}
		}
	}
}


/* = End of Functions = */
/* =============================================<<<<< */