import {
  checkProductInCart,
  checkWishlist,
} from "@/app/actions/products.actions";
import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddToCartWidgetActions from "./AddToCartWidgetActions";

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
    cartResponse = await checkProductInCart(
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
        <div className="flex justify-center items-baseline mb-1 space-x-2">
          {discountedPrice ? (
            <>
              <p className="text-base sm:text-lg text-themePrimary dark:text-themeSecondary-foreground  font-semibold">
                ${discountedPrice}
              </p>
              <p className="text-sm text-gray-400 line-through">
                ${regularPrice}
              </p>
            </>
          ) : (
            <>
              <p className="text-base sm:text-lg text-themePrimary dark:text-themeSecondary-foreground  font-semibold">
                ${regularPrice}
              </p>
            </>
          )}
        </div>

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
