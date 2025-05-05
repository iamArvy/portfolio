export interface Repository {
  name: string;
  nameWithOwner: string;
  description: string;
  url: string;
  homepageUrl: string;
  languages: {
    name: string;
    color: string;
  }[];
  topics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
  readme: {
    text: string;
  };
}

export interface User {
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  location: string;
  email: string;
}

export interface RepositoriesResponse {
  user: {
    repositories: {
      nodes: Repository[];
    };
  };
}

export interface RepositoryResponse {
  repository: Repository;
}

export interface RepositoryReadmeResponse {
  content: string;
  encoding: string;
  html_url: string;
  name: string;
}

export type UserResponse = {
  user: User;
};
