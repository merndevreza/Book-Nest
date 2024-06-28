import Link from "next/link";

const allCategories = [
  {
    id: 1,
    name: "Magazine",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "Arts",
  },
  {
    id: 4,
    name: "Magazine",
  },
  {
    id: 5,
    name: "Science",
  },
  {
    id: 6,
    name: "Arts",
  },
];
const CategoryListMenu = () => {
  return (
    <ul className="grid gap-2 grid-cols-3  w-full bg-themeSecondary text-themeSecondary-foreground p-5 transition duration-300 rounded">
      {allCategories.map((category) => (
        <li key={category?.id}>
          <Link
            className="hover:text-themePrimary text-md"
            href={`/category/${category?.id}`}
          >
            {category?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryListMenu;
