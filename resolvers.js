import { JobListing, JobApplication } from "./models.js";

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
    updateJobListing: (_, args) =>
      JobListing.findByIdAndUpdate(args.id, args, { new: true }),
    deleteJobListing: (_, { id }) => JobListing.findByIdAndRemove(id),
    applyForJob: (_, args) => JobApplication.create(args),
    updateJobApplicationStatus: (_, args) =>
      JobApplication.findByIdAndUpdate(
        args.id,
        { status: args.status },
        { new: true }
      ),
  },
};
