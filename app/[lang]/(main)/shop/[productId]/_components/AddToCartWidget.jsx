import { auth } from "@/auth";
import AddToCartBtn from "@/components/AddToCartBtn";
import AddWishlistBtn from "@/components/AddWishlistBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddToCartWidget = async ({
  productId,
  regularPrice,
  discountedPrice,
  format,
  title,
}) => {
  const session = await auth();
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

        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-2">
          <AddToCartBtn
            isLoggedIn={session ? true : false}
            productId={productId}
            format={format}
          />
          <AddWishlistBtn
            isLoggedIn={session ? true : false}
            productId={productId}
            format={format}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddToCartWidget;
