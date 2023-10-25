import { Schema, model } from "mongoose";

const jobListingSchema = new Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  applicationInstructions: String,
});
export const JobListing = model("JobListing", jobListingSchema);

const jobApplicationSchema = new Schema({
  jobListing: { type: Schema.Types.ObjectId, ref: "JobListing" },
  jobListingId: String,
  company: String,
  title: String,
  name: String,
  email: String,
  resume: String,
  status: String,
});

export const JobApplication = model("JobApplication", jobApplicationSchema);
