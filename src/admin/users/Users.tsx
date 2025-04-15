import Container from "@/components/reusable/Container";
import UsersTable from "./UsersTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Users = () => {
  return (
    <Container>

      {/* Header */}
      <div className="flex justify-between items-center my-8 lg:my-3">

        {/* left side content */}
        <div>
          <h1 className="text-sm md:text-lg font-bold">All User from Laivaly</h1>
          <p className="text-xs md:text-base font-medium text-gray-600">Total 210 user</p>
        </div>

        {/* right side filter options */}
        <div>
          <Select>

            <SelectTrigger className="border border-gray-300 flex justify-between gap-4 cursor-pointer">
              <SelectValue placeholder="User Role" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Buyer</SelectItem>
                <SelectItem value="banana">Staf</SelectItem>
              </SelectGroup>
            </SelectContent>

          </Select>
        </div>

      </div>

      {/* Table container */}
      <div>
        <UsersTable />
      </div>

    </Container>
  );
};

export default Users;
