
# AI Gym Frontend

Welcome to the AI Gym Frontend! This is the user-facing part of the AI-based gym management and fitness recommendation system. It's a modern, interactive web application that lets you browse gyms, get personalized recommendations, and use your camera to get real-time feedback on your exercises.

This guide will help you get the project running on your local machine for development and testing purposes.

## Features

*   **Modern User Interface:** A professional, responsive design with a dark theme.
*   **Gym Discovery:** A complete page to browse, search, and filter gyms by name, location, rating, amenities, and more.
*   **AI Vision Trainer:** Use your webcam to get real-time pose analysis for exercises like Bicep Curls, Squats, and Push-ups, with live rep counting and form feedback.
*   **User Authentication:** Fully functional Login and Signup pages.
*   **Dynamic Pages:** Includes a Home Page, Blogs, Contact, and a User Dashboard.

## Technology Used

*   **React:** A powerful JavaScript library for building user interfaces.
*   **Vite:** A lightning-fast development server and build tool.
*   **Tailwind CSS:** A utility-first CSS framework for rapid, custom UI development.
*   **MediaPipe:** Google's open-source framework for live, on-device AI and computer vision tasks (used for the pose detection).
*   **React Router:** For handling navigation between different pages in the application.

---

## Getting Started: How to Run This Project

Follow these instructions to set up and run the project on your own computer.

### Prerequisites

Before you begin, you need to have **Node.js** installed. This is a program that lets you run JavaScript on your computer and manage project dependencies.

1.  **Check if you have Node.js:** Open your computer's terminal (like Command Prompt on Windows or Terminal on macOS) and type this command, then press Enter:
    ```bash
    node -v
    ```
    If you see a version number (e.g., `v18.17.0`), you are ready. If you get an error, you need to install it.

2.  **Install Node.js:** Go to the official [Node.js website](https://nodejs.org/) and download the "LTS" (Long-Term Support) version. Run the installer just like any other program. After it's finished, re-open your terminal and check the version again to be sure.

### Installation and Setup

**Step 1: Get the Project Files**

First, you need to download or clone the project files to your computer. If you have the project as a ZIP file, simply unzip it.

**Step 2: Navigate to the Project Folder**

Using your terminal, go inside the main project folder. This folder should contain a file named `package.json`.

# Example: Replace with the actual path to your project
cd path/to/your/project/Gym-Frontend

Step 3: Install Project Dependencies

Once you are inside the project folder, run the following command. This command reads the package.json file and automatically downloads all the specific libraries and tools that this project needs to run (like React, Tailwind CSS, etc.).

```
npm install
```

This might take a few minutes. You will see a new folder named node_modules appear in your project – this is where all the downloaded code is stored.

Running the Application

After the installation is complete, you can start the application's development server.

Step 4: Start the Development Server

Run this command in your terminal:

```
npm run dev
```

You should see some output in your terminal, including a line that looks like this:

➜  Local:   http://localhost:5173/

Step 5: View the Application

Open your web browser ( Google Chrome is highly recommended for the best experience with the AI features) and go to the URL from your terminal: http://localhost:5173/

You should now see the AI Gym homepage! You can navigate around, use the filters, and test all the features.

Important Notes for the AI Vision Trainer

Use Google Chrome: The AI pose detection technology (MediaPipe) uses advanced browser features that are best supported in Chrome. While it may work in other browsers, Chrome provides the most stable experience.

Allow Camera Access: The first time you use the "AI Tools" page, your browser will ask for permission to use your webcam. You must click "Allow" for the feature to work.

Good Lighting and Positioning: For the best results, make sure you are in a well-lit room and that your entire body is visible in the camera frame.

That's it! The project is now running on your machine. To stop the development server, go back to your terminal and press `Ctrl + C`.
