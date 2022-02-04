import { connect } from "../mongodb/connect";

const findOneTest = async () => {
  let connection, cursor;

  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    const addressesCollection = db.collection("addresses");

    cursor = personsCollection.find({});
    const persons = await cursor.toArray();

    const _id = persons[0]._id;
    const result = await personsCollection.findOne({ _id });
    console.log(_id, result);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

findOneTest();
