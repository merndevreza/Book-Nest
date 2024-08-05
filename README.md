# Book Nest

**Book Nest** is a full-stack e-commerce application built with Next.js, designed for selling books in multiple formats:

- Printed Book (New)
- Printed Book (Used)
- E-book
- Audiobook

## Features
 
- **Product Display**: Featured, latest and best selling products are displayed in different sections. Users can search (with debounce), filter by formats, authors, categories, price, and rating with pagination.

- **Shopping Features:** Users can add products to wishlist, cart and then checkout with stripe payment gateway. A PDF invoice will be generated and sent to customer and admin email. User could download their purchased E-book and Audio Book.

- **User Authentication:** Registration, credential login, social login and logout with NextAuth.

- **User Restrictions:** Users must be logged in to add products to the cart or wishlist. Products intended for the cart before login will be saved and displayed after login.

- **User Features:** Can update profile, read or download purchased Ebook and Audio Book, see all orders.

- **Admin Dashboard Features:** Can see all analytics data in chart, all products, orders, users, uploaded media, edit or add new product, new user and author. Feature some product, change user role.

- **Other Features:** SEO optimized (SSR and SSG), Image optimized, Accessibility, Multilingual, Dark/Light mode, Social share, Responsive.

## Technologies Used

- **React** (v18)
- **Next.js** (v14.2.4)
- **Tailwind CSS** 
- **Shadcn/ui** with Radix UI elements. 
- **MongoDB** and **Mongoose** for database management
- **Vercel-Blob** for storage
- **Framer Motion** for animations
- **React-hook-form** with **zod**  for form management 
- **Pdf-lib** for PDF generation and Reading PDF file
- **Typewriter-effect** for animated text 
- **Next-themes** for theme management
- **Recharts** for data visualization 

## Live link
https://book-nest-tau.vercel.app