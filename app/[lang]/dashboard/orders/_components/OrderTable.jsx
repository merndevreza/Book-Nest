import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function OrderTable() {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="hidden sm:table-cell">Formats</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Book Name</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  Author
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
