import { describe, test, expect } from 'vitest';

describe('Test basic api endpoints', () => {
  const baseUrl = `${import.meta.env.VITE_SERVER_API}`;

  async function testRoute() {
    return fetch(`${baseUrl}/auth/test`).then((res) => res.json());
  }

  async function privateRoute() {
    return fetch(`${baseUrl}/user/1`).then((res) => res.json());
  }

  test('should return a message if the server is working', async () => {
    await expect(testRoute()).resolves.toEqual({ message: 'Test route' });
  });

  test('server should respons with 403', async () => {
    await expect(privateRoute()).resolves.toEqual({
      message: 'Unauthorized Access!',
    });
  });
});
