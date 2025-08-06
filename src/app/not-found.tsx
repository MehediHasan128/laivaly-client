import Button from "@/components/reusable/Button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-extrabold">Oops!</h1>
        <h1 className="text-2xl font-medium">404 - Page not found!</h1>
        <p className="gray-text">The page you are looking for might have been removed <br />had its name changed or is temporarily unavailable.</p>
        <Link href="/home"><Button buttonTitle="Go To Home"/></Link>
      </div>
    </main>
  );
};

export default NotFound;
