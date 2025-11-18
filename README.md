This project is a mobile-friendly responsive website, using Vite, TypeScript, and TailwindCSS, and deployed on Vercel. 
The codebase is simple and organized, with all main functionality located inside the src/ directory and assets inside the images/ folder. 
To work on the project locally, developers should install dependencies using npm install and start the development server with npm run dev, which will run the site at http://localhost:5173. 
The project can be built for production with npm run build. Once connected to GitHub, Vercel automatically redeploys changes pushed to the main branch.

The site uses TypeScript lightly, mainly for basic type checking, so developers who prefer JavaScript can still work comfortably by using simple types or any when necessary. 
TailwindCSS handles all styling and can be extended through tailwind.config.js. 
Link redirects (such as project links or social media icons) should be implemented with standard <a> tags that include target="_blank" and rel="noopener noreferrer", 
and TypeScript values may occasionally require a cast such as as string.

Future developers should note that the project was originally created by a different developer and later taken over and documented for clarity. 
Small issues may exist in design spacing, responsiveness, or link functionality depending on client updates. 
The code is client-owned, and any modifications should follow the existing structure and Tailwind conventions. 
The goal of this README is to provide a quick, clear overview so that anyone joining the project can understand how to run, edit, and deploy the site without confusion.
