# Job Search App

This application specifically describes searching for a job related to their field or area of ​​interest. Various components can be created within the Index.js file which acts as the root file. These components contain program code for application programming interface (API) calls, posting job search details, and error messages in case of wrong input. It also makes it easier for the company to deal with users, determine their role, and receive applicants for the job, as the user is linked to the company’s app in order to apply for the job. I think it is beneficial and saves time for all parties. Let’s explain that !.
## Features

 * Filter option to get the required job.
 * Handles the user’s data.
 * Handles the company’s data.
 * Handles the Job Applications
## Useing  

 * Express.js
 * DB ( MongoDB )
 * ORM Mongoose
### Npm Modules 

```
$ npm i express
$ npm i joi
$ npm i jsonwebtoken
$ npm i mongoose
$ npm i multer
$ npm i nanoid
$ npm i nodemon
$ npm i nodemailer
$ npm i uuidv4
$ npm i cors
$ npm i bcrypt
```

### Collections

* User Collection
* Company Collection
* Job Collection
* Application Collection
## User APIs

1. Sign Up
2. Sign In
    - Sign In using  (email or recoveryEmail or mobileNumber)  and password
3. update account.
    - you can update ( email , mobileNumber , recoveryEmail , DOB , lastName , firstName)
    - if user update the email , mobileNumber the new data doesn’t conflict with any existing data in database
    - only the owner of the account can update his account data
4. Delete account
    - only the owner of the account can delete his account data
    - User must be loggedIn
5. Get user account data 
    - only the owner of the account can get his account data
    - User must be loggedIn
6. Get profile data for another user 
    - send the userId in params or query
7. Update password 
8. Forget password 
9. Get all accounts associated to a specific recovery Email

## Deployment

Additional notes on how to deploy this on a live or release system. Explaining the most important branches, what pipelines they trigger and how to update the database (if anything special).

### Server

* Live:
* Release:
* Development:

### Branches

* Master:
* Feature:
* Bugfix:
* etc...

## Additional Documentation and Acknowledgments

* Project folder on server:
* Confluence link:
* Asana board:
* etc...
