## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Regarding the solution implemented`

In any case, the structure of the project is simple: on the App.tsx file there are routes along with the header and the footer.
On the pages folder I decided to place the components that are actually pages.
I've created 2 custom hooks: one to retrieve data from the localStorage (when possible) and the other to retrieve methods from the context folder.
The components folder is where every component that is not a page (yet is part of it) lies.
For instance, the header and the footer components are located there.
Along with that, in order to modularize and reuse code as much as possible there are some other components on the components folder: for instance, each article-list component render article-card component. 
The "bookmarks" and the "articles" components render the "article-list" component.

The tech challenge file provided 2 designs, hence I had to think about what other views would look like. For instance, every time we open an article a modal is opened. I think this provides a simpler approach to this tech challenge and if you want to close the modal there are 2 options: either click on the "close" button, or outside of the modal!

Also, the application has limited responsive design (for smallscreen, for instance, on iPhone XR. There are media queries for a 900px breakpoint).

Anyway, the "home" of the application is the login page. There you'll be able to login (if you've already created an user), or register an user.
There were no validations specified on the tech challenge, hence I did not implemented any.

To kickstart the project type npm install and then npm start.

Hope you enjoy!