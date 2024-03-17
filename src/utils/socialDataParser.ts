/* eslint-disable @typescript-eslint/naming-convention */
export const parseGoogleData = (data: Record<string, string>) => {
  const { email, name, family_name, given_name, picture } = data;

  return {
    firstname: family_name || name,
    lastname: given_name || '',
    email,
    profilePicture: picture,
    provider: 'google',
    providerId: '', // TODO: investigate this
  };
};

export const parseGithubData = (data: Record<string, string>) => {
  const { avatar_url, email, id, name } = data;

  const [firstName, lastName] = name.split(' ');

  return {
    firstname: firstName || name,
    lastname: lastName || '',
    email,
    profilePicture: avatar_url,
    provider: 'github',
    providerId: id,
  };
};

export const parseDiscordData = (data: Record<string, string>) => {
  const { avatar, email, id, global_name, username } = data;
  let avatar_url = '';

  const [firstName, lastName] = global_name.split(' ');

  if (avatar) {
    avatar_url = `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
  }

  return {
    firstname: firstName || username,
    lastname: lastName || '',
    email,
    profilePicture: avatar_url,
    provider: 'discord',
    providerId: id,
  };
};
