import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import App from '@/App';

describe('Generic App tests', () => {
  test('app is loading, has correct classes and is showing loading page', () => {
    render(<App />);
    const app = document.querySelector('.App');

    expect(app).toBeDefined();
    expect(app?.classList).toContain([
      'App',
      'w-screen',
      'h-screen',
      'overflow-x-hidden',
      'font-comfortaa',
      'bg-stone-100',
    ]);

    const loginPage = app?.querySelector('.login-page');
    expect(loginPage).toBeDefined();
  });
});
