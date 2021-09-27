/*--------------------------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
 *-------------------------------------------------------------------------------------------------------------*/

'use strict';

const MongoClient = require('mongodb').MongoClient;

// Constants
const MONGO_URL = 'mongodb://localhost:27017';

(async function () {
	// Use connect to mongo server
	const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });
	await client.connect();
	console.log('Connected successfully to Mongo DB');
})();


