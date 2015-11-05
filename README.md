# Sky Apps Team - Welcome!
The Apps team at Sky are pleased to send you this unattended test. This means we think your CV is pretty good so we want to see if your approach to work is the same as ours. Our team is very Agile and TDD oriented so we believe a few lines of great code speak more than endless CV pages! We’d like you to use this test to show us how awesome you are at what you do.

## Pre-Interview Developer Test

The test duration 3 hours.

If you could fork the Git repo, do an initial commit when you start, complete as much of the work outlined in the readme in the timeframe and send us back your solution that'd be great. Once complete please provide a link to your repository. We’d like to understand your approach as well as how great your work is, so please don’t simply commit all of your work in a single chunk.

Your solution will be evaluated on implementation of the below requirements, code maintainability, code clarity, and software development best practices. We would urge you to treat this like a mini-project and follow whatever Agile/TDD/BDD/etc approach you would use on any other project. Once reviewed, we will ask you to delete (or make private) your repository once we have reviewed your code.

## Requirements

Create a NodeJS app which provides an authentication API to your angular app. The usernames 'user', 'manager', 'admin', 'developer', 'tester', with the password 'password' should be authenticated. All other combinations should fail. Eg, username 'john.smith' can never authenticate. Usernames should be case-insensitive, passwords should be case-sensitive.

Create an AngularJS app which allows a user to enter a username and password and authenticate both. Successful authentication should provide the user with a logged-in page and the ability to log out.

Authentication attempts should be recorded in a Mongo database with the following data:

  *	IP
  *	Datetime (unix timestamp format)
  *	Action (should be one of AUTH_SUCCESS or AUTH_FAILURE)
  *	Username

Expose a JSON feed of the authentication data to authenticated admin users only.

Good luck!

Sky Apps team

---

### Instructions

- run mongo on localhost (or update `mongo.uri` property in `server/config/environment` files)
- `npm install -g gulp bower` to install gulp and bower globally
- `npm install && bower install` on project root folder to install packages
- `npm test` or `gulp test` to run tests
- `npm start` or `gulp serve` to start server (default port: 8080, can be configured)
- users created when the app is initialised: 'user', 'manager', 'admin', 'developer', 'tester' with 'password' as password
