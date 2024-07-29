import Link from "next/link";

const CategoryListMenu = ({ categories, lang }) => {
  return (
    <ul className="grid gap-2 grid-cols-3  w-full bg-themeSecondary dark:bg-secondary  text-themeSecondary-foreground p-5 transition duration-300 rounded">
      {categories.map((category) => (
        <li key={category?.id}>
          <Link
            className="hover:text-themePrimary text-base"
            href={`/${lang}/shop/?category=${category?.id}`}
          >
            {category?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryListMenu;
