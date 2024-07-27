import {
   Card,
   CardContent, 
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"
const AddReview = () => {
   return (
      <Card>
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-xl">Add Your Feedback</CardTitle>
        <div className="space-y-1 pt-4"> 
          <p>Add</p>
        </div>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
   );
};

export default AddReview;