import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI = 'mongodb+srv://harsh:1234@cluster0.xukqm6n.mongodb.net/';
const DATABASE_1 = 'test';
const DATABASE_2 = 'PathPlan';

const connectDB = async (database: string) => {
  try {
    const conn = await mongoose.connect(`${MONGODB_URI}${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }as ConnectOptions);
    console.log(`MongoDB Connected to ${database}: ${conn.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error connecting to MongoDB: ${err.message}`);
    } else {
      console.error(`Error connecting to MongoDB: ${err}`);
    }
    process.exit(1);
  }
};

const switchDatabase = async (database: string) => {
  try {
    await mongoose.disconnect();
    await connectDB(database);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error switching to database ${database}: ${err.message}`);
    } else {
      console.error(`Error switching to database ${database}: ${err}`);
    }
  }
};

// Connect to the initial database (DATABASE_1)
export default connectDB;

// Example of switching to another database (DATABASE_2)
// Note: Make sure to handle this in an appropriate place in your code, for example, based on specific logic or user input.
// setTimeout(() => switchDatabase(DATABASE_2), 5000); // Example of switching after 5 seconds
