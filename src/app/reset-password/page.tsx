import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

interface ResetPasswordPageProps {
  searchParams: { token?: string };
}

const ResetPassPage = ({ searchParams }: ResetPasswordPageProps) => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]">
        <div>
          <h1 className="text-3xl font-semibold">Create new password</h1>
          <p className="text-sm text-gray-700 mt-3 mb-10">
            Your new password must be different from pervious used password
          </p>
        </div>
        <div>
          <ResetPasswordForm token={searchParams.token as string} />
        </div>
      </div>
    </main>
  );
};

export default ResetPassPage;
