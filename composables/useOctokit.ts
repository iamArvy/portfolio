import { Octokit } from "@octokit/rest";

export const useOctokit = () => {
  // const config = useRuntimeConfig();
  const octokit = new Octokit();
  const username = useAppConfig().githubUsername;

  const { data: user } = useAsyncData("user", async () => {
    const { data } = await octokit.rest.users.getByUsername({
      username: username,
    });
    return data;
  });

  const { data: repos } = useAsyncData(`repos`, async () => {
    const res = await octokit.rest.repos.listForUser({
      username: username,
    });
    console.log(res.data);
    return res.data;
  });
  return { octokit, user, repos };
};
