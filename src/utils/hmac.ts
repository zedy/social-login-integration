// libs
import cryptoJs from 'crypto-js';
import queryString from 'query-string';

/**
 * We generate a HMAC on the client side and send the parameters to the server.
 * The server will then generate a HMAC using the same parameters and compare it to the one sent by the client.
 * If the HMACs match, the request is considered authentic.
 *
 * The secret keys have to be identical on the client and server side in
 * order to generate the same HMAC.
 *
 * @returns Record<string, string>
 */
const generateHmac = () => {
  const timestamp = new Date().getTime();
  const host = import.meta.env.VITE_HOST;
  const session = Math.random().toString(36).substring(2);
  const params = { host, session, timestamp };
  const message = queryString.stringify(params);
  const hmac = cryptoJs
    .HmacSHA256(message, import.meta.env.VITE_SECRET_API_KEY)
    .toString();

  return {
    hmac,
    ...params,
  };
};

export default generateHmac;
