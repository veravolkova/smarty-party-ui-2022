## Project Description

The project is a gift planning website. The idea is that a holiday organizer creates a list of desired gifts and provides guests\
with an access (is created manually in the database or through POST request).\

Guests can reserve (as well as release) a gift that they like, can also suggest their own gifts, filter, edit, and remove gifts.\
In future they would also have an opportunity to comment on gifts (implementation in process) so that they can ask any related questions.
Attendance confirmation functionality is also on the to do list. 

Please access the app [here](https://smarty-party.onrender.com/)

username: 
password: 

Link to [timesheet](https://docs.google.com/spreadsheets/d/18aQt8I-v28MmZ6HoqZdh-ZA-UXA7ZKnP/edit?usp=sharing&ouid=118251201705632491819&rtpof=true&sd=true)

## Main Pages

### Home page
A starter page with general information (Birthday date and photo in our case).

### Gifts page
A gift page with a full list of gifts than can be filtered (All, Reserved by Me, Available).\
Here gifts can be reserved, released, and removed (if a user is an admin or a gift owner, i.e. the gift is reserved by this user).\
Upon clicking on a gift, a user navigates to the gift details page.

### Gift details page
Name, description of a gift, and its URL (if any) are provided. A user can edit a gift (if an admin user or owner).

### Users page
A full list of guests. Upon clicking on a name, a user navigates to the guest/user details page.

### User details page
A full list of gifts reserved by a user.

## Available functionality

* Login/ logout
* User roles (admin, basic, and guest users; all users are basic by default)
* Gift CRUD: get, create, edit and remove gift
* Filter gifts by availability
* Reserve and release gifts 
* Get user/s

## Technologies used
* React JS
* Redux
* Axios
* Material UI
* React-confetti
* Jest
* Cypress
* Eslint


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the unit test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm run server`

Runs a simple http server to serve static resource files from a local directory. Used for development and testing purposes. 

### `npm run eslint`

Runs ESLint on any file or directory for identifying and reporting on patterns.

### `npm run cypress:open`

Start Cypress from the command line, opens lunchpad (in a browser).

### `npm run test:e2e`

Runs Cypress tests from the command line.


### To Do List
* Implement a number of users per gift to share the expenses
* ~~Create admin user to e.g. delete gifts ~~
* Create admin panel
* ~~Fix pop up style (above the form, not to the left) on the login page~~
* Update react version, fix deprecations
* ~~Switch off Cypress video and screenshots~~
* Responsive css
* Integrtion with shops, events (tickets, subscription)
* Refactor styling, so that everything is at one place
* Create table component, make it reusable
* Gifts page - implement ask a question section
* ~~Edit gift for gift owners and admins~~
* Extend error handling, incl. tests
* ~~Are you sure you want to remove gift alert~~
* Increase unit tests coverage
* Increase e2e tests coverage: gift page, user page, edit
* ~~separate reducer for availability~~
* Create form component, make it reusable
* Error page
* ~~Router in a separate component~~
* Route in a separate component
* Extend validation 
* Animated cursor
* Links health checker
* ~~My gifts filter~~
* Comments component
* Extend user service, add user reducer
* Remove passwords in tests 
* Radio buttons  ~~and labels ~~ into a separate component
* Deployment  scripts
* Cache
* Move the rest of the pages into a separate folder
* Move login anf logout related things from App into user service
* Revisit buttons - component vs imported directly from MUI
* Availability logic component
* Index page for export from utils
* Implement Typescript
* Radio buttons group in a separate component
* Rename Button component to ButtonMUI
* ~~Text Field element into a separate component~~
* Confirm attendance functionality
* Days before the event counter at the front page


## Pictures used
All the pictures used in the project have creative common license and can be freely used. 
[Pastel Colored Balloons](https://www.pexels.com/photo/pastel-colored-balloons-3905885/)
[Birthday Girl](https://www.pexels.com/photo/little-girl-and-a-corgi-dog-in-birthday-caps-5264087/)