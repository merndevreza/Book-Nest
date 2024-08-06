import { cn } from "@/lib/utils";

const SinglePrice = ({discountedPrice,regularPrice,className}) => {
   return (
      <div 
      className={cn(`flex justify-center items-baseline mb-1 space-x-2 ${className}`)}  >
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
   );
};

export default SinglePrice;