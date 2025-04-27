export const useAppProfile = async () => {
  const profile = await queryCollection("profile").first();
  return { profile, socials: profile?.socials, contacts: profile?.contacts };
};
