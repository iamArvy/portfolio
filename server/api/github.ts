// // /server/api/github.ts
// import { graphql } from "@octokit/graphql";
// import type {
//   UserResponse,
//   RepositoriesResponse,
//   RepositoryResponse,
// } from "~/types/github";
// import { useBody } from "h3";
// export default defineEventHandler(async (event) => {
//   const config = useRuntimeConfig(event);
//   const token = config.githubToken;
//   const { repoName, username } = await useBody(event);
//   const graphqlWithAuth = graphql.defaults({
//     headers: {
//       authorization: `token ${token}`,
//     },
//   });

//   const { user }: UserResponse = await graphqlWithAuth(
//     `query{
//       viewer{
//         name
//         avatarUrl
//         htmlUrl
//         bio
//         location
//         email
//         followers {
//           totalCount
//         }
//         pinnedRepositories(first: 6, orderBy: {field: CREATED_AT, direction: DESC}) {
//           totalCount
//           nodes {
//             name
//           }
//         }
//       }
//     }`
//   );

//   const {
//     user: { repositories },
//   }: RepositoriesResponse = await graphqlWithAuth(
//     `query {
//       viewer(){
//         repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
//           totalCount
//           nodes {
//             name
//             full_name: nameWithOwner
//             languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
//               nodes {
//                 name
//                 color
//               }
//             }
//             topics: repositoryTopics(first: 10) {
//               nodes {
//                 topic {
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }`
//   );

//   const { repository }: RepositoryResponse = await graphqlWithAuth(
//     `query($owner: String!, $name: String!) {
//           repository(owner: $owner, name: $name) {
//             name
//             description
//             url
//             homepageUrl
//             languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
//               nodes {
//                 name
//                 color
//               }
//             }
//             topics: repositoryTopics(first: 10) {
//               nodes {
//                 topic {
//                   name
//                 }
//               }
//             }
//             readme: object(expression: "HEAD:README.md") {
//               ... on Blob {
//                 text
//               }
//             }
//           }
//         }
//         `,
//     {
//       owner: user.name,
//       name: repoName,
//     }
//   );
//   // const { viewer } = await graphqlWithAuth(`
//   //   query {
//   //     viewer {
//   //       login
//   //     }
//   //   }
//   // `);

//   return {
//     user,
//     repositories,
//     // login: viewer.login
//   };
// });
