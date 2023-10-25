import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/JobListing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

