/* eslint-disable @typescript-eslint/ban-ts-comment */
// libs
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, expect, test, describe, beforeEach, afterEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// components
import App from '@/App';
import DiscordLogin from '@/components/elements/auth/DiscordLogin';
import LoginComponent from '@/pages/auth/Login';
import { ModalContextProvider } from '@/context/ModalContext';

const queryClient = new QueryClient();

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

  // will only test the DiscordLogin component not all login components
  test('loads DiscordLogin on the "/" route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DiscordLogin mutationCallback={vi.fn()} />
      </MemoryRouter>
    );

    const component = document.querySelector('.discordLogin');

    // @ts-ignore: issue with type mismatch from extended matchers
    expect(component).toBeInTheDocument();
  });
});

describe('Show modal', () => {
  beforeEach(() => {
    // Create a div with #modal-root id and append it to document.body
    // This simulates the modal root element that your modal portals into
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    // Clean up the modal root from the document body to avoid pollution between tests
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  test('displays the modal when the button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <QueryClientProvider client={queryClient}>
          <ModalContextProvider>
            <LoginComponent />
          </ModalContextProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    const openModalButton = screen.getByTestId('modal-open-button');
    fireEvent.click(openModalButton);
    // @ts-ignore: issue with type mismatch from extended matchers
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
