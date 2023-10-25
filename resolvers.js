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
    jobSeekerAccount: async () => {
      const jobseekers = await JobSeekerAccount.find();
      return jobseekers;
    },

    jobSeekerAccountByUsername: async (_, {jobSeekerUsername}) => {
      const jobseekersbyac = await JobSeekerAccount.find({username: jobSeekerUsername});
      return jobseekersbyac;
    },

    recruiterAccount: async() => {
      const recruiter = await RecruiterAccount.find();
      return recruiter;
    }
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

    createRecruiterProfile: async (_, args) => {
      const recruiter = await RecruiterAccount.create(args);
      return recruiter;
    },

    updateRecruiterProfile: async (_, args) => {
      const updateRecruiter = RecruiterAccount.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      return updateRecruiter;
    },

    updateJobListing: async (_, args) => {
      const updateJob = JobListing.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      return updateJob;
    },

    deleteJobListing: async (_, { id }) => {
      const deleteJobListing = await JobListing.findByIdAndRemove(id);
      return deleteJobListing;
    },

    updateJobApplicationStatus: (_, args) =>
      JobApplication.findByIdAndUpdate(
        args.id,
        { status: args.status },
        { new: true }
      ),
  },
};
