const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware 
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://userdb:userdb100@cluster0.41efc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db('geniusCar').collection('service');
        const query = {};
        // get 
        app.get('/services', async(req, res) => {
            const cursor = userCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });


    } finally {
        // await client.close();

    }
}
run().catch(console.dir)



app.listen(port, () => {
    console.log("Listening to port", port)
});