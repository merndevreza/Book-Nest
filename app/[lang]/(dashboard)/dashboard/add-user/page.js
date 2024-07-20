import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddUserForm from "./_components/AddUserForm";
import BreadCrumb from "@/components/BreadCrumb";

const paths = [
  {
    label: "Dashboard",
    href: "dashboard",
  },
  {
    label: "Add User",
    href: "dashboard/add-user",
  },
];
const AddUserPage = ({ params: { lang } }) => {
  return (
    <div>
      <BreadCrumb lang={lang} paths={paths} />
      <main className="grid flex-1 items-start ">
        <Card>
          <CardHeader>
            <CardTitle>Add User</CardTitle>
          </CardHeader>
          <CardContent>
            <AddUserForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddUserPage;
