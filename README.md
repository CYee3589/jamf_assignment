# ACME Animal Farm Application

## Introduction
In the ACME Animal Farm app, you will be greeted to the app’s home page. In this page, you will be prompted to click on an animal's button that you would like to know the details of. Each animal is represented as a button that will bring you to the detail page. The detail page will show you a list of details about that animal. The page also has a “Back” button that will bring you back to the home page.

## Design and Technology Choice
#### Language Choice
###### Java
I'm comfortable with the language. If I chose it, it would be command line interaction as that is what I have knowledge of.  Alternatively, I could learn Java Web Servlets and learn how to deploy on Tomcat.
###### Swift
My primary PC is a MacBook Pro and I have 3-years of C/C++ programming at UMass Lowell, but I do not have experience with this language.
###### Python
I have learned Python in High School and in a course here at Lowell, but have not done any web or GUI programming in the language.
###### Angular
I’m not familiar with this Javascript Framework, but I recognize that this is the ideal language for building this app by consuming web services. I saw the 2 endpoints as being simple enough that I could learn some basic Angular and use the tutorial demo code to develop this app.
#### App Development with Angular
With Angular, I chose to use Visual Studio Code as my IDE. My community edition version of IntelliJ doesn’t support Angular, so this was the next best choice.


## How to Execute Code
#### Software Requirements
###### NodeJS 
Command to check version: *node -v* (Works for both Mac and Windows)
###### Angular CLI
Command to check version: *ng -v* (Works for both Mac and Windows)
###### NPM
Command to check version: *npm -v* (Works for both Mac and Windows)
#### Installation Instructions
###### NodeJS
Link to download area: https://nodejs.org/en/download/  
Link to installation instructions  
On Mac: https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/  
On Windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows  
###### Angular CLI and NPM
Link to installation instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm 

#### Running the App
Clone this project to your local system.  

Open a console to the root directory of this project.  

Issue the following command: *ng serve*  

Open a browser (e.g., Google Chrome) and enter this URL: http://localhost:4200/  
**Note:**  Running this app may result in the following error message: *CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.*  
Please install the following Plug-In / Extension on Chrome: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en 

The home page shows the list of animals on the Acme Animal Farm.  
![App's Home Page](/assets/images/HomePage.png)
The detail page shows the list of details from “horse”
![App's Detail Page](/assets/images/DetailPage.png)


## Future To-Dos
In the event where the API’s fetches nothing, I would like a custom page that shows that no animals or details were found
I would like to better design the app’s design with picture, gifs, and a color scheme that fits with Jamf
