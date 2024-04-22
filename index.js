const mongoose = require('mongoose');
const Product = require('./models/product.model');

const express = require('express');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes config
app.use('/api/products', productRoute);

const uri =
  'mongodb+srv://matheusdiegoteixeira:T4Xh1erKserdj2HW@nodejs-study.yz8rpga.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-study';

// const clientOptions = {
//   serverApi: { version: '1', strict: false, deprecationErrors: true },
// };

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri);
//     // await mongoose.connect(uri, clientOptions);
//     // await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log('Pinged your deployment. You successfully connected to MongoDB!');
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);

mongoose.connect(uri).then(() => {
  console.info('Connected to database!');
});

// starts server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000');
});
