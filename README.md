# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!--  -->
📌 Project Overview

This is a simple React project created as part of an assignment. The project demonstrates the use of multiple components, responsive design with TailwindCSS, and icons using React Icons.

🛠️ Components Created

Dashboard.jsx – Main component which serves as the entry point and contains other components.

Profile.jsx – Displays user profile details in a structured way.

Notification.jsx – Shows notification messages for the user.

🎨 Features & Tools Used

React – Component-based UI development.

TailwindCSS – For styling and responsive layout.

React Icons – For adding clean and modern icons.

Responsive Design – Works smoothly on different screen sizes.

🔗 Component Flow

The project follows a simple and clean component hierarchy:

App.jsx  
   └── Dashboard.jsx  
          ├── Profile.jsx  
          └── Notification.jsx  

🚀 How to Run the Project

Clone the repository.

Install dependencies:

npm install


Start the development server:

npm run dev

📱 Responsiveness

The UI is fully responsive and adapts to mobile, tablet, and desktop screens.

TailwindCSS utility classes are used for layout adjustments across breakpoints
