import { Schema, model } from "mongoose";

const jobListingSchema = new Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  applicationInstructions: String,
});


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

const JobSeekerAccountSchema = new Schema({
   username: String,
   Name: String,
   email: String,
   phone: String,
   // job Seeker will be a button which user clicked then
   // will be redirected to job seeker dashboard
   jobSeeker: Boolean,
   age: Number,
   yearsOfExperience: Number,
   openToWork: Boolean,
   currentCompany: String,
   currentPosition: String,
   expectedSalary: Number,

});

const RecruiterAccountSchema = new Schema({
  username: String,
  Name: String,
  email: String,
  phone: String,
  recruiter: Boolean,
  age: Number,
  company: String,
  hiring: Boolean
});



export const JobListing = model("JobListing", jobListingSchema);
export const JobApplication = model("JobApplication", jobApplicationSchema);
export const JobSeekerAccount = model("JobSeekerAccount", JobSeekerAccountSchema);
export const RecruiterAccount = model("RecruiterAccount", RecruiterAccountSchema);



