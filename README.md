# Frontend Proposal

This is a **React-based frontend project** for managing projects, providing an intuitive interface for listing projects, viewing detailed information, and editing project details. The project leverages modern technologies for a seamless and user-friendly experience.

---

## Project Structure

The project follows a modular structure, ensuring maintainability and scalability:

- **Components**: Reusable UI components.
- **Pages**: Different pages like the project list and project details.
- **Services**: API calls and data handling using Axios.
- **Styles**: Custom styling using Material-UI and Tailwind CSS.
- **Utils**: Helper functions and constants for shared functionality.

---

## Features

### Project List
- Displays a list of all projects.
- Includes details such as:
  - Project ID
  - Name
  - Start and end dates
  - Assigned manager

### Project Details
- View specific project details.
- Edit and update project information dynamically.

### Sidebar
- Displays a curated list of favorite projects for quick access.

---

## Technologies Used

This project utilizes the following technologies:

- **React**: For building the user interface.
- **React Router**: For seamless navigation between pages.
- **Axios**: For handling API requests and data fetching.
- **Material-UI**: For pre-styled components and design consistency.
- **Tailwind CSS**: For custom and responsive styling.
- **Styled Components**: For making reusable styled components.

---

## Getting Started

### Prerequisites

Ensure the following are installed on your system:

- **Node.js** (latest LTS version recommended)
- **npm** (Node Package Manager)

### Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/frontend-proposal.git
   cd Tech-Assessment-SGG

2. Install Dependencies:
    ```bash
    npm install

3. Start the mock server (for API responses):
    ```bash
    npx json-server --watch db.json --port 3001

4. Start the development server:
    ```bash
    npm start

5. Open your browser and navigate to:
    ```bash
    http://localhost:3000