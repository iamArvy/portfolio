import { graphql } from "@octokit/graphql";
import type {
  RepositoriesResponse,
  RepositoryResponse,
  UserResponse,
} from "~/types/github";

export const useOctokit = () => {
  const { githubUsername: username } = useAppConfig();
  const { githubToken: token } = useRuntimeConfig().public;
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  });

  const getUser = async () => {
    const { user }: UserResponse = await graphqlWithAuth(
      `query($login: String!) {
        user(login: $login){
          name 
          avatarUrl
          htmlUrl
          bio
          location
          email
          followers {
            totalCount
          }
          pinnedRepositories(first: 6, orderBy: {field: CREATED_AT, direction: DESC}) {
            totalCount
            nodes {
              name
            }
          }
        }
      }`,
      {
        login: username,
      }
    );
    return user;
  };

  const getRepositories = async () => {
    const {
      user: { repositories },
    }: RepositoriesResponse = await graphqlWithAuth(
      `query{
        user: viewer{
          repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
            totalCount
            nodes {
              name
              nameWithOwner
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                nodes {
                  name
                  color
                }
              }
              topics: repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }`
    );
    return repositories;
  };

  const getRepository = async (repo: string) => {
    const { repository }: RepositoryResponse = await graphqlWithAuth(
      `query($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          name
          description
          url
          homepageUrl
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            nodes {
              name
              color
            }
          }
          topics: repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
          readme: object(expression: "HEAD:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
      `,
      {
        owner: username,
        name: repo,
      }
    );
    return repository;
  };
  return {
    getUser,
    getRepositories,
    getRepository,
  };
};
