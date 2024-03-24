import { describe, test, expect } from 'vitest';

describe('Test api`s', () => {
  const baseUrl = `${import.meta.env.VITE_SERVER_API}`;

  async function testRoute() {
    return fetch(`${baseUrl}/auth/test`).then((res) => res.json());
  }

  test('check to see if server will respond', async () => {
    await expect(testRoute()).resolves.toEqual({ message: 'Test route' });
  });
});
