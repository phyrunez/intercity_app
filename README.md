# REACT + TYPESCRIPT + VITE

# Prequisite

Make sure you have Node.js(version 16+ recommended) installed using npm or yarn

## Project Setup Instructions

The following Setup instruction was used for specifically for the app as it was built using vite

=> Run npm create vite@latest Intercity --template react-ts  
=> chnage directory to project using "cd Intercity"
=> Install dependency using "npm install"
=> Run the Application using "npm run dev"

### Initialized a Git Repository

After the Project has been created successfully, I also created a remote repository on Github where I can push my code. I ran the following command after the Repo was created:

=> git init
=> git add .
=> git commit -m "-- message ---"
=> git branch -M main
=> git remote add origin "--- url to remote repo ---"
=> git push -u origin main

#### Installing Dependencies

I installed the following dependencies using "npm install -- dependency_name ---" command

=> Tailwindcss, A CSS framework for making the look better UI
=> react-hot-toast for display different message with regards the Application state to the user

##### Running the Application Locally

To do this, Just use the link "http://localhost:5173" on your browser

###### Building for production

I used the command "npm run build" on my command prompt to build locally first, then the dist folder created at the root of my Project was used to build the application on Netlify

The Application is Live and you can access it using "https://intercity-clone.netlify.app

###### Approach to challenge

I used the browser log (console.log) for debugging and the API Docs also helpful
