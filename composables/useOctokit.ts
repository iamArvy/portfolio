import { Octokit } from "@octokit/rest";

export const useOctokit = () => {
  // const config = useRuntimeConfig();
  const octokit = new Octokit();

  return { octokit };
};
