# the-girl-who-talks-too-much-blog
## An app created by Erik Scheive
I created this blog for a client who has always wanted to get into blogging but didn't know how. I knew them personally so I was able to connect about my web development capabilities and I was able to propose some ideas that they liked.

## Technologies Used
The base of this app is Next.js for the frontend and PostgreSQL for the backend. A full list of all the technologies used:
- Next.js (React framework)
- React (Frontend SPA framework)
- Typescript (Builds upon JS and adds additional syntax)
- Next-superjson-plugin (Plugin that helps with datetime in prisma)
- Tailwindcss (Css class-based framework)
- Flowbite (Plugin for tailwind)
- Sass (Allows for more dynamic css)
- Prisma (Object relational mapping client for the backend)
- PostgreSQL (For the backend)
- Bit.io (To host the database)

## Project Files Description
### Pages Directory
- Stores all templates/views for the application
- App.tsx is the main, index.tsx is the landing page, and the rest are specific views that are named accordingly
### Components Directory
- Holds all components for the app like the nav, footer, forms, and the post templates.
- These are imported to the pages where needed to make the code DRYer
### prisma.ts
- Thsi creates and stores the prisma client as a variable so it can be referenced throughout the application
### schema.prisma
- This is where the database is connected and the models are defined for the app

## To-do
MVP Goals left:
- Finish the all posts directory
- Create multiple post templates for the create route
- Allow for viewers to leave a comment
- Allow for an admin login so the site owner can have access to create

Stretch Goals:
- Create cool data models to diversify the app and make it more interactive
- Implement more UI technologies to make it stand out

