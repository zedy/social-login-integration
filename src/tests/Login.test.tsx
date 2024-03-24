import { vi, describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '@/components/form/Login.form';

type Props = {
  email: string;
  password: string;
};

const data = {
  email: 'john@example.com',
  password: 'Password123',
};

describe('LoginForm', () => {
  const mockMutationCallback = vi.fn();
  const callback = {
    mutate: (formData: Props) => {
      return formData;
    },
  };

  const mutateSpy = vi.spyOn(callback, 'mutate');

  beforeEach(() => {
    render(<LoginForm mutationCallback={mockMutationCallback} />);
  });

  test('renders form fields correctly', () => {
    expect(screen.getByLabelText('Email')).toBeDefined();
    expect(screen.getByLabelText('Password')).toBeDefined();
  });

  test('submits form data on button click', async () => {
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'Password123' },
    });

    fireEvent.click(screen.getByText('Sign in'));

    callback.mutate({
      ...data,
    });

    expect(mutateSpy).toHaveBeenCalledWith({
      email: 'john@example.com',
      password: 'Password123',
    });
  });
});
