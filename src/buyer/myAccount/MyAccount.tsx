import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MyAccount = () => {
  return (
    <div>
      <div>
        <Avatar className="size-52 rounded-xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default MyAccount;
