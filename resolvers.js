import {
  JobListing,
  JobApplication,
  JobSeekerAccount,
  RecruiterAccount,
} from "./models.js";

export const resolvers = {
  Query: {
    jobListings: async () => {
      const jobListings = await JobListing.find();
      return jobListings;
    },
    jobApplications: async (_, { jobListingId }) => {
      const jobApplications = await JobApplication.find({
        jobListing: jobListingId,
      }).sort({ createdAt: -1 });
      return jobApplications;
    },
  },
  Mutation: {
    createJobListing: async (_, args) => {
      const Job = await JobListing.create(args);
      return Job;
    },

    applyForJob: async (_, args) => {
      const application = await JobApplication.create(args);
      return application;
    },

    createJobSeekerProfile: async (_, args) => {
      const jobseeker = await JobSeekerAccount.create(args);
      return jobseeker;
    },

    updateJobSeekerProfile: async (_, args) => {
      const updateJobSeeker = JobSeekerAccount.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      return updateJobSeeker;
    },

    updateJobListing: async (_, args) => {
      const updateJob = JobListing.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      return updateJob;
    },

    deleteJobListing: (_, { id }) => JobListing.findByIdAndRemove(id),

    updateJobApplicationStatus: (_, args) =>
      JobApplication.findByIdAndUpdate(
        args.id,
        { status: args.status },
        { new: true }
      ),
  },
};
