import { vi, describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '@/components/form/Signup.form';

type Props = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const data = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'john@example.com',
  password: 'Password123',
};

describe('SignupForm', () => {
  const mockMutationCallback = vi.fn();
  const callback = {
    mutate: (formData: Props) => {
      return formData;
    },
  };

  const mutateSpy = vi.spyOn(callback, 'mutate');

  beforeEach(() => {
    render(<SignupForm mutationCallback={mockMutationCallback} />);
  });

  test('renders form fields correctly', () => {
    expect(screen.getByLabelText('First name')).toBeDefined();
    expect(screen.getByLabelText('Last name')).toBeDefined();
    expect(screen.getByLabelText('Email')).toBeDefined();
    expect(screen.getByLabelText('Password')).toBeDefined();
    expect(screen.getByLabelText('Password verify')).toBeDefined();
  });

  test('submits form data on button click', async () => {
    fireEvent.change(screen.getByLabelText('First name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText('Last name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'Password123' },
    });
    fireEvent.change(screen.getByLabelText('Password verify'), {
      target: { value: 'Password123' },
    });

    fireEvent.click(screen.getByText('Sign up'));

    callback.mutate({
      ...data,
    });

    expect(mutateSpy).toHaveBeenCalledWith({
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      password: 'Password123',
    });
  });
});
