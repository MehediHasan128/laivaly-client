import OTPForm from "@/components/auth/OTPForm";
import LogoWithTitle from "@/components/reusable/LogoWithTitle";

export const metadata = {
  title: "Verify Your Email",
  description:
    "Enter the OTP sent to your email to verify your account and activate all features.",
  keywords: "email verification, OTP verification, account activation, MyApp",
  robots: "index, follow",
};

interface VerifyEmailPageProps {
  searchParams: Promise<{
    userEmail?: string;
  }>;
}

const VerifyEmailPage = async ({ searchParams }: VerifyEmailPageProps) => {
  const { userEmail } = await searchParams;

  return (
    <main className="flex justify-center items-center h-screen relative">
      <div className="absolute top-8 left-5 lg:top-16 lg:left-20">
        <LogoWithTitle />
      </div>
      <div className="space-y-5 w-[330px] md:w-[425px] mx-auto">
        <div className="font-semibold space-y-2">
          <h1 className="text-2xl">Verify Your Email</h1>
          <p className="text-xs text-gray-700">
            We’ve sent a 6-digit verification code to your email address. Please
            enter the code below to verify your account.
          </p>
        </div>
        <div>
          <OTPForm userEmail={userEmail as string} />
        </div>
      </div>
    </main>
  );
};

export default VerifyEmailPage;
