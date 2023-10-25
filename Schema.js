export const typeDefs = `#graphql

type JobListing {
    id: ID!
    title: String!
    company: String!
    location: String!
    description: String!
    applicationInstructions: String!
  }

  type JobApplication {
    id: ID!
    jobListing: JobListing!
    jobListingId: String
    title: String!
    company: String!
    name: String!
    email: String!
    resume: String!        # URL to resume uploaded in cloud
    status: String
  }

  type Query {
    jobListings: [JobListing]
    jobApplications(jobListingId: ID!): [JobApplication]
  }

  type Mutation {
    createJobListing(
      title: String!
      company: String!
      location: String!
      description: String!
      applicationInstructions: String!
    ): JobListing

    updateJobListing(id: ID!, title: String, description: String): JobListing

    deleteJobListing(id: ID!): JobListing

    applyForJob(
      jobListingId: String
      company: String!
      title: String!
      name: String!
      email: String!
      resume: String!
      status: String
    ): JobApplication

    updateJobApplicationStatus(id: ID!, status: String!): JobApplication
  }

`;
