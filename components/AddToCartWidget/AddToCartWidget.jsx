import {
  checkDigitalProductInCart,
  checkWishlist,
} from "@/app/actions/products.actions";
import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddToCartWidgetActions from "./AddToCartWidgetActions";
import SinglePrice from "../SinglePrice";

const AddToCartWidget = async ({
  productId,
  regularPrice,
  discountedPrice,
  format,
  title,
}) => {
  const session = await auth();

  let wishlistResponse;
  let cartResponse;

  if (session) {
    wishlistResponse = await checkWishlist(session?.user.id, productId, format);
  }
  if (session && (format === "ebook" || format === "audioBook")) {
    cartResponse = await checkDigitalProductInCart(
      session?.user.id,
      productId,
      format
    );
  }

  return (
    <Card>
      <CardHeader className="p-2 lg:p-4">
        <CardTitle className="text-lg lg:text-xl text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-2 lg:px-4 pb-2 lg:pb-4">
        <SinglePrice
          discountedPrice={discountedPrice}
          regularPrice={regularPrice}
        /> 
        <AddToCartWidgetActions
          isLoggedIn={session ? true : false}
          userId={session ? session?.user.id : null}
          productId={productId}
          format={format}
          isFoundInCart={cartResponse?.success ? cartResponse?.isFound : false}
          isFoundInWishlist={
            wishlistResponse?.success ? wishlistResponse?.isFound : false
          }
        />
      </CardContent>
    </Card>
  );
};

export default AddToCartWidget;
