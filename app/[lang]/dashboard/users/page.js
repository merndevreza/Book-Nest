import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "./_components/PageHeader";
import { Button } from "@/components/ui/button";
import { File, PlusCircle } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import TableRowUserInfo from "./_components/TableRowUserInfo";

const UsersPage = ({ params: { lang } }) => {
  return (
    <div>
      <PageHeader lang={lang} />
      <main className="grid flex-1 items-start gap-4    md:gap-8 mt-4 md:mt-0">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger className="hidden sm:inline-block" value="admin">Admin</TabsTrigger>
              <TabsTrigger className="hidden sm:inline-block" value="author">Author</TabsTrigger>
              <TabsTrigger className="hidden sm:inline-block" value="user">User</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-7 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Link href="/dashboard/add-user">
                <Button size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add User
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle>Users</CardTitle>
                <CardDescription>Manage your users.</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        Avatar
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead  className="hidden sm:table-cell">Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Created at
                      </TableHead>
                      <TableHead>
                        <span>Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRowUserInfo />
                    <TableRowUserInfo />
                    <TableRowUserInfo />
                    <TableRowUserInfo />
                  </TableBody>
                </Table>
              </CardContent> 
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default UsersPage;
