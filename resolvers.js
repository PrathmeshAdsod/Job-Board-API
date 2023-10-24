import { JobListing, JobApplication } from './models.js';

export const resolvers = {
  Query: {
    jobListings: () => JobListing.find(),
    jobApplications: (_, { jobListingId }) =>
      JobApplication.find({ jobListing: jobListingId }),
  },
  Mutation: {
    createJobListing: (_, args) => JobListing.create(args),
    updateJobListing: (_, args) =>
      JobListing.findByIdAndUpdate(args.id, args, { new: true }),
    deleteJobListing: (_, { id }) => JobListing.findByIdAndRemove(id),
    applyForJob: (_, args) => JobApplication.create(args),
    updateJobApplicationStatus: (_, args) =>
      JobApplication.findByIdAndUpdate(args.id, { status: args.status }, { new: true }),
  },
};


