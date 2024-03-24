import { describe, test, expect } from 'vitest';
import generateHmac from '@/utils/hmac';
import { getJwtToken, verifyToken } from '@/utils/tokenizer';

// Mock localStorage
const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = String(value);
    },
    clear() {
      store = {};
    },
  };
})();

const mockJwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Test utility functions', () => {
  test('hmac is generated coorrectly', () => {
    const hmacObj = generateHmac();

    expect(hmacObj).toBeDefined();
    expect(hmacObj).toBeTypeOf('object');
    expect(hmacObj).toHaveProperty('hmac');
    expect(hmacObj).toHaveProperty('session');
    expect(hmacObj).toHaveProperty('host');
    expect(hmacObj.hmac).toHaveLength(64);
  });

  test('should return the JWT token from localStorage', () => {
    window.localStorage.setItem('jwtToken', mockJwtToken);

    const token = getJwtToken();

    expect(token).toEqual(mockJwtToken);
  });

  test('should return false for provided generic jwtToken', () => {
    const token = verifyToken(mockJwtToken);
    expect(token).toBe(false);
  });

  test('should return null if no JWT token is found in localStorage', () => {
    window.localStorage.clear();

    const token = getJwtToken();

    expect(token).toBeNull();
  });
});
