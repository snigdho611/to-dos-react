# To Do List App

This is a simple to do list application created from vanilla React JS.
No additional libraries are installed for this project, and it is simply done using React JS and CSS.

To install the app, open the command line from the root directory (where the package.json file is located at) and use the command:
`npm install`

To run the app, open the command line from the root directory (where the package.json file is located at) and use the command:
`npm start`

The application will be available for access at the `port: 3000`

Below is a screenshot of the application's view:
![image](https://raw.githubusercontent.com/snigdho611/to-dos-react/main/public/sample.png)

### Functionalities:

1. Saves new tasks to list that stay until the page is refreshed
2. Keeps count of completed tasks once they are marked as completed
3. Allows cancellation of tasks, they are not counted under the completed task counter

### Description:

- Each task has a title, description and time of the day as deadline
- Tasks are kept unique from one another in existing list by an ID
- Tasks can be cancelled, or marked as completed
- Validation is required, so that title, description or the deadline is never empty
