import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="md:-mt1 relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <LoginForm />
        <div className="rounded-lg bg-gray-200 p-4">
          <h2 className="mb-2 text-lg font-bold">Test User Credentials</h2>
          <p>
            <strong>Username:</strong> user@nextmail.com
          </p>
          <p>
            <strong>Password:</strong> 123456
          </p>
        </div>
      </div>
    </main>
  );
}
