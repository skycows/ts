import { connect } from "../mongodb/connect";

const findDocumentTest = async () => {
  let connection, cursor;

  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    const addressesCollection = db.collection("addresses");

    cursor = personsCollection.find({ name: "Jack", age: 32 });
    const persons = await cursor.toArray();
    console.log(persons);

    cursor = addressesCollection.find({});
    const addresses = await cursor.toArray();
    console.log(addresses);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

findDocumentTest();
