# Instructions

* This project makes use of Node.js. [See here](https://nodejs.org/en/) for installation instructions on Windows and Mac. If you are on Ubuntu/Debian or using Bash on Windows, you can also [install using a package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

1. Clone this repository and cd into the cloned directory.
2. `npm install` to install dependencies.
3. `npm start` to run the server. Then open a web browser and go to `localhost:3000` to view the working site.

# Technologies Used

### Long Polling

* Reading: [8.3.1 - Long Polling](https://theandrewchan.gitbooks.io/javascript-crash-course/content/8-communicating-with-a-backend.html)

Set up node's build in EventEmitter to subscribe and publish messages based on  the web query.
Front end codes sends ajax http requests for updates.


### Native Websockets

* Reading: [8.3.2 - Websockets](https://theandrewchan.gitbooks.io/javascript-crash-course/content/8-communicating-with-a-backend.html)

Uses native html5 websockets and Node's 'ws' module in conjunction with EventEmitter to subscribe and publish messages.
