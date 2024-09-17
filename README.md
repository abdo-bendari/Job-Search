# About 

This application specifically describes searching for a job related to their field or area of ​​interest. Various components can be created within the Index.js file which acts as the root file. These components contain program code for application programming interface (API) calls, posting job search details, and error messages in case of wrong input. It also makes it easier for the company to deal with users, determine their role, and receive applicants for the job, as the user is linked to the company’s app in order to apply for the job. I think it is beneficial and saves time for all parties. Let’s explain that !.
## Features

 * Filter option to get the required job.
 * Handles the user’s data.
 * Handles the company’s data.
 * Handles the Job Applications
## Useing  

 * JavaScript
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

## Company APIs

1. Add company 
    - Only ( Company_HR ) role
2. Update company data
    - only the company owner can update the data
3. Delete company data
    - only the company owner can delete the data
    -  authorized with role ( Company_HR)
4. Get company data 
    - send the companyId in params to get the desired company data
    - authorized with role ( Company_HR)
5. Search for a company with a name. 
    - authorized with the role ( Company_HR and User)
6. Get all applications for specific Job
    - each company Owner can take a look at the applications for his jobs only, he has no access to other companies’ application
    - authorized with role (  Company_HR )


## Jobs APIs

1. Add Job 
2. Update Job
    - authorized with the role ( Company_HR )
3. Delete Job
    - authorized with the role ( Company_HR )
4. Get all Jobs with their company’s information.
5. Get all Jobs for a specific company.
    - send the company name in the query and get this company jobs.
6. Get all Jobs that match the following filters 
    - filter with workingTime , jobLocation , seniorityLevel and jobTitle,technicalSkills
    - one or more of them should applied   
7. Apply to Job
    - This API will add a new document in the application Collections with the new data
    - authorized with the role ( User )


## Additional Documentation and Acknowledgments

* Project folder on server:
* Confluence link:
* etc...
