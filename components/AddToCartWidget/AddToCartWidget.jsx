import { 
  checkProductInCart,
  checkWishlist,
} from "@/app/actions/products.actions";
import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddToCartWidgetActions from "./AddToCartWidgetActions";
import SinglePrice from "../SinglePrice";

const AddToCartWidget = async ({
  regularPrice,
  discountedPrice,
  format,
  title,
  book,
}) => {
  const session = await auth();

  let wishlistResponse;
  let cartResponse;

  if (session) {
    wishlistResponse = await checkWishlist(session?.user.id, book?.id, format);
  }
  if (session && (format === "ebook" || format === "audioBook")) {
    cartResponse = await checkProductInCart(
      session?.user.id,
      book?.id,
      format
    );
  }
  // product info as needed for cart and wishlist context
  const productInfoForWishlistContext = {
    id: crypto.randomUUID(),
    format,
    productId: {
      id: book?.id,
      title: book?.title,
      author: {
        firstName: book?.author.firstName,
        lastName: book?.author.lastName,
      },
      price: { regularPrice, discountedPrice },
      thumbnail: book?.thumbnail,
    },
  };
  // product info as needed for cart and wishlist context
  const productInfoForCartContext = {
    id: crypto.randomUUID(),
    format,
    addedAt: Date.now(),
    productId: {
      id: book?.id,
      title: book?.title,
      author: {
        firstName: book?.author.firstName,
        lastName: book?.author.lastName,
      },
      price: { regularPrice, discountedPrice },
      thumbnail: book?.thumbnail,
      stock: book?.stock,
    },
  };
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
          productInfoForWishlistContext={productInfoForWishlistContext}
          productInfoForCartContext={productInfoForCartContext}
          isLoggedIn={session ? true : false}
          userId={session ? session?.user.id : null}
          productId={book?.id}
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
