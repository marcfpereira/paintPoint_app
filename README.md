# Paint&point S.L Application 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1 by Marc Fernández Pereira for Aktios. <br/>All images appearing in the application are copyright free and have been obtained from https://this-person-does-not-exist.com/en.


## GitHub Pages deployment
- The technical test can be accessed through the following link: https://marcfpereira.github.io/paintPoint_app/. If you prefer to run it on a local server, follow the steps detailed below.

## Instructions to run the project in localhost
- Open powershell in windows or terminal in linux and ake sure you have node.js installed with `node -v`
- Install the last version of angular running `npm install @angular/cli`
- Make sure that the installation of Angular has gone well running `ng version`
- Run `npm install` to install all dependencies
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## Running unit tests
I was able to implement a test in the utils.service.ts. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## How is the project developed?
I have implemented all the items requested in the test document. For loading the necessary employee and resource data I have implemented the ngRX redux model.  I thought it would be interesting to store the data loaded in the store as an optimization proposal. 
If the application scales, this system saves a lot of repetitive request traffic. If you want to see the progressive data loading in the store you can use the redux devTools plugin. You will also notice that even if the user leaves the employee page the data is still stored for use.   
On the other hand, I have encountered some difficulties:
- The list of employees received from the API contains an attribute (country-id) that causes problems to define the model for that data in Angular.
