import { House } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

const ITEMS_TO_DISPLAY = 3;
const BreadCrumb = ({ paths, lang }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="py-4">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={`/${lang}`}
              className="inline-block text-themeSecondary hover:text-themePrimary"
            >
              <House size={20} />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {paths.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {paths.slice(0, -1).map((item, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link className="text-base" href={`/${lang}/${item?.href}`}>
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ))}
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base">
                {paths.at(-1).label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <>
            {paths.slice(0, -1).map((item, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link className="text-base" href={`/${lang}/${item?.href}`}>
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ))}
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base">
                {paths.at(-1).label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
