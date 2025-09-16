import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { cookies } from "next/headers";

const ResetPassPage = async() => {

  const cookieStore = (cookies() as unknown as ReturnType<typeof cookies>);
  const token = (await cookieStore).get("passwordResetToken")?.value;

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
          <ResetPasswordForm token={token as string} />
        </div>
      </div>
    </main>
  );
};

export default ResetPassPage;