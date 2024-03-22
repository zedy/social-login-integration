/* eslint-disable no-console */
// libs
import axios from 'axios';

// components
import { genericToastError } from '@/utils/helpers';
import { parseDiscordData } from '@/utils/socialDataParser';

/**
 * Custom implementation of the Discord OAuth2 login workflow.
 *
 * @see https://discord.com/developers/docs/topics/oauth2
 * @see DiscordLogin.tsx
 */
export default async function getDiscordResponse(
  code: string[],
  callback: (data: Record<string, string>) => void
) {
  try {
    if (!code || code.length === 0) return;

    const tokenResponseData = await axios.post(
      'https://discord.com/api/oauth2/token',
      new URLSearchParams({
        client_id: import.meta.env.VITE_DISCORD_APP_ID,
        client_secret: import.meta.env.VITE_DISCORD_APP_SECRET,
        code: code[0],
        grant_type: 'client_credentials',
        redirect_uri: `${import.meta.env.VITE_HOST}/login`,
        scope: 'identify email',
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (tokenResponseData && tokenResponseData.data) {
      const { access_token: accessToken, token_type: tokenType } =
        tokenResponseData.data;
      const userResult = await axios.get('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`,
        },
      });

      if (userResult.data) {
        await callback(parseDiscordData(userResult.data));
      } else {
        genericToastError();
      }
    }
  } catch (error) {
    console.error(error);
    genericToastError();
  }
}
