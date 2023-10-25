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

  type JobSeekerAccount {
   id: ID!,
   username: String!,
   Name: String!,
   email: String!,
   phone: String!,
   # job Seeker will be a button which user clicked then
   # will be redirected to job seeker dashboard
   jobSeeker: Boolean!,
   age: Int!,
   yearsOfExperience: Int,
   openToWork: Boolean,
   currentCompany: String,
   currentPosition: String,
   expectedSalary: Int,
  }


  type  RecruiterAccount {
    username: String!,
    Name: String!,
    email: String!,
    phone: String!,
    recruiter: Boolean!,
    age: Int!,
    company: String!,
    hiring: Boolean
  }

  type Query {
    jobListings: [JobListing]
    jobApplications(jobListingId: ID!): [JobApplication]
    JobSeekerAccount: [JobSeekerAccount]
    JobSeekerAccountByUsername(jobSeekerUsername: String!): [JobSeekerAccount]
  }

  type Mutation {
    createJobListing(
      title: String!
      company: String!
      location: String!
      description: String!
      applicationInstructions: String!
    ): JobListing

    applyForJob(
      jobListingId: String
      company: String!
      title: String!
      name: String!
      email: String!
      resume: String!
      status: String
    ): JobApplication

    createJobSeekerProfile (
      username: String!,
      Name: String!,
      email: String!,
      phone: String!,
      # job Seeker will be a button which user clicked then
      # will be redirected to job seeker dashboard
      jobSeeker: Boolean!,
      age: Int!,
      yearsOfExperience: Int,
      openToWork: Boolean,
      currentCompany: String,
      currentPosition: String,
      expectedSalary: Int,
    ): JobSeekerAccount
    
    updateJobSeekerProfile(
        id: ID!, Name: String,
        email: String,
        phone: String,
        age: Int,
        yearsOfExperience: Int,
        openToWork: Boolean,
        currentCompany: String,
        currentPosition: String,
        expectedSalary: Int
    ): JobSeekerAccount

    updateJobListing(id: ID!, title: String, description: String, location: String, applicationInstructions: String): JobListing

    deleteJobListing(id: ID!): JobListing

    updateJobApplicationStatus(id: ID!, status: String!): JobApplication
  }

`;
