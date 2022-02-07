const { MongoClient } = require('mongodb');

const db = {};

const connectToDb = async () => {
    const mongodbClient = new MongoClient('mongodb+srv://admin:admin123@cluster0.up9ls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    await mongodbClient.connect();
    console.log('DB connected');
    const database = mongodbClient.db('mindx_web_55');
    db.students = database.collection('students');
    db.teachers = database.collection('teachers');
    db.users = database.collection('users');
};

module.exports = { db, connectToDb };