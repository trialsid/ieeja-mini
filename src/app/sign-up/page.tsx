import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
              card: 'shadow-none'
            }
          }}
        />
      </div>
    </div>
  );
}