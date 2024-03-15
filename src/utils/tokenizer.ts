/* eslint-disable @typescript-eslint/no-explicit-any */
// third-party
import { jwtDecode } from 'jwt-decode';

// types
export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

/**
 * Verifies the JWT token signature and expereation date.
 *
 * @param jwtToken string
 * @returns boolean
 */
export const verifyToken: (st: string) => boolean = (jwtToken) => {
  if (!jwtToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(jwtToken);
  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  return decoded.exp > Date.now() / 1000;
};

/**
 * Simple function to set the JWT token in the local storage or remove it.
 *
 * @param jwtToken
 * @returns void
 */
export const setSession = (jwtToken?: string | null) => {
  if (jwtToken) {
    localStorage.setItem('jwtToken', jwtToken);
  } else {
    localStorage.removeItem('jwtToken');
  }
};
