<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->


 🚀

  ## Overview

This is a React-based Employee Management System for basic user management operations including:

- Authentication (Login)
- List Users with Pagination
- Edit User Details
- Delete Users
- Protected Routes
- Local Token Persistence

---

 ## Features 

  ## Login Authentication  
User can log in using:
- Email : eve.holt@reqres.in
- Password : cityslicka

 ## Token Storage 
Token is stored in **Local Storage** after successful login and used to protect routes.

 ## User List  
Displays a list of users fetched from ReqRes API with pagination.
## Edit User
User details (First Name, Last Name, Email) can be edited.  
Note: Since ReqRes is a mock API, the changes are updated only on the UI, not on the server.

  ## Delete User 
Users can be removed from the list locally.


 ## Bootstrap Styling 
The entire application is styled using Bootstrap  for better UI.

  ## React Router Integration  
Navigation between Login, User List, and Edit User pages.

---

  ## Install dependencies 
 npm install , 
 npm install bootstrap react-router-dom axios
  
** TO run ** 
  npm run dev

