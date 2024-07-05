const { MongoClient } = require('mongodb')

/**
 * Establishes a connection to MongoDB using Mongoose.
 */
export function connect() {
    const client = new MongoClient('mongodb://localhost:27017')
        client.connect()
        .then(() => {
            console.log('Connected Successfully to DB!')
        })
        .catch(error => console.log('Failed to connect!', error))
}