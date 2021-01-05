export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const UPDATE_JOBSEEKER_REQUEST = 'UPDATE_JOBSEEKER_REQUEST'
export const UPDATE_JOBSEEKER_SUCCESS = 'UPDATE_JOBSEEKER_SUCCESS'
export const UPDATE_JOBSEEKER_FAIL = 'UPDATE_JOBSEEKER_FAIL'
export const REGISTER_JOBSEEKER_REQUEST = 'REGISTER_JOBSEEKER_REQUEST'
export const REGISTER_JOBSEEKER_SUCCESS = 'REGISTER_JOBSEEKER_SUCCESS'
export const REGISTER_JOBSEEKER_FAIL = 'REGISTER_JOBSEEKER_FAIL'
export const LOGIN_EMPLOYER_REQUEST = 'LOGIN_EMPLOYER_REQUEST'
export const LOGIN_EMPLOYER_SUCCESS = 'LOGIN_EMPLOYER_SUCCESS'
export const LOGIN_EMPLOYER_FAIL = 'LOGIN_EMPLOYER_FAIL'
export const LOGOUT_EMPLOYER = 'LOGOUT_EMPLOYER'
export const LOGIN_JOBSEEKER_REQUEST = 'LOGIN_JOBSEEKER_REQUEST'
export const LOGIN_JOBSEEKER_SUCCESS = 'LOGIN_JOBSEEKER_SUCCESS'
export const LOGIN_JOBSEEKER_FAIL = 'LOGIN_JOBSEEKER_FAIL'
export const LOGOUT_JOBSEEKER = 'LOGOUT_JOBSEEKER'
export const JOB_POST_REQUEST = 'JOB_POST_REQUEST'
export const JOB_POST_SUCCESS = 'JOB_POST_SUCCESS'
export const JOB_POST_FAIL = 'JOB_POST_FAIL'
export type EmployerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction
  | LoginEmployerRequestAction
  | LoginEmployerSuccessAction
  | LoginEmployerFailAction
  | LogoutEmployerAction
  | CreatingJobActionType
  | JobFailActionType
  | JobSuccessActionType

export type RegisterEmployerRequestAction = {
  type: typeof REGISTER_EMPLOYER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerSuccessAction = {
  type: typeof REGISTER_EMPLOYER_SUCCESS
  payload: {
    employerInfo: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerFailAction = {
  type: typeof REGISTER_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type LoginEmployerRequestAction = {
  type: typeof LOGIN_EMPLOYER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
  }
}

export type LoginEmployerSuccessAction = {
  type: typeof LOGIN_EMPLOYER_SUCCESS
  payload: {
    employerInfo: {
      email: string
      password: string
    }
  }
}

export type LoginEmployerFailAction = {
  type: typeof LOGIN_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type LogoutEmployerAction = {
  type: typeof LOGOUT_EMPLOYER
}

export type JobseekerActions =
  | RegisterJobseekerRequestAction
  | RegisterJobseekerSuccessAction
  | RegisterJobseekerFailAction
  | LoginJobseekerRequestAction
  | LoginJobseekerSuccessAction
  | LoginJobseekerFailAction
  | LogoutJobseekerAction
  | updateJobseekerRequestAction
  | updateJobseekerSuccessAction
  | updateJobseekerFailAction

export type RegisterJobseekerRequestAction = {
  type: typeof REGISTER_JOBSEEKER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
  }
}

export type RegisterJobseekerSuccessAction = {
  type: typeof REGISTER_JOBSEEKER_SUCCESS
  payload: {
    jobSeekerInfo: {
      email: string
      password: string
    }
  }
}

export type RegisterJobseekerFailAction = {
  type: typeof REGISTER_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}

export type LoginJobseekerRequestAction = {
  type: typeof LOGIN_JOBSEEKER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
  }
}

export type LoginJobseekerSuccessAction = {
  type: typeof LOGIN_JOBSEEKER_SUCCESS
  payload: {
    jobSeekerInfo: {
      email: string
      password: string
    }
  }
}

export type LoginJobseekerFailAction = {
  type: typeof LOGIN_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}

export type LogoutJobseekerAction = {
  type: typeof LOGOUT_JOBSEEKER
}

export type Credential = {
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  contact?: string
  seniority?: string
  skills?: any[]
  skillLevel?: string
  duration?: string
}

export type CredentialState = {
  credentials: Credential
}

export type CredentialStateEmployer = {
  credential: {
    email: string
    password: string
  }
  loading: Boolean
  error: any
  jobPost: {
    title: string
    jobDescription: string
    seniority: string
    skills: any[]
  }
}

export type CredentialStateJobseeker = {
  credential: {
    email: string
    password: string
  }
  loading: Boolean
  error: any
}

export type AppState = {
  employer: CredentialStateEmployer
  jobseeker: CredentialStateJobseeker
}

export type updateJobseekerRequestAction = {
  type: typeof UPDATE_JOBSEEKER_REQUEST
  payload: {
    jobSeekerId: string
  }
}

export type updateJobseekerSuccessAction = {
  type: typeof UPDATE_JOBSEEKER_SUCCESS
  payload: {
    firstName: string
    lastName: string
    contact: string
    seniority: string
  }
}

export type updateJobseekerFailAction = {
  type: typeof UPDATE_JOBSEEKER_FAIL
  payload: string
}

//  for job post ==> redux stuff
export type JobPost = {
  title: string
  jobDescription: string
  seniority: string
  skills: any[]
}

export type CreatingJobActionType = {
  type: typeof JOB_POST_REQUEST
  payload: JobPost
}
export type JobSuccessActionType = {
  type: typeof JOB_POST_SUCCESS
}
export type JobFailActionType = {
  type: typeof JOB_POST_FAIL
  payload: {
    error: any
  }
}
