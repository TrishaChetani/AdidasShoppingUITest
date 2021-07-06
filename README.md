# Guide for using automation script in Hoeffner newsletter subscription
- it will simulate user actions in web browser and check if function works as expected.

## Tech stacks

- [`webdriver.io`](https://webdriver.io/)
- Cucumber framework  
- node,npm

## Test Scenario : Performing a newsletter subscription Hoeffner
## Test Cases in Gerkins Syntax :
```
Feature: Performing a newsletter subscription Hoeffner
Background: Open the Hoeffner webpage and accept the cookies
Given  I visit Hoeffner login page
When   I accept the cookie setting pop-up

Scenario Outline: As a user, I can perform a newsletter subscription in Hoeffner login webpage
Given  I can see the newsletter subscription input field
When   I enter my "<email>" in the input field
When   I press the Absenden button
Then   I can see a confirmation message that my subscription is in progress
Examples:
| email                        |
| agarwalatrisha1212@gmail.com |
```

## 2.0 Setup
### Dev Setup nodejs and npm
* install node and npm
```
brew update
brew install node
```
* install all the dependenices
-  ```npm install``` as to install all dependendies from package.json


### 2.1.  Run test using DOCKER
- (`Docker Service`)[https://webdriver.io/docs/docs/wdio-docker-service.html]
- ```npm install wdio-docker-service --save-dev```
```
services: ["chromedriver","docker"],
	dockerLogs: './logs',
  	dockerOptions: { 
    image: 'selenium/standalone-chrome',
    healthCheck: {
		url: 'https://returnly-candidates-01.myshopify.com/',
		maxRetries: 3,
		inspectInterval: 1000,
		startDelay: 2000
	},
    options: { 
      p: ['4444:4444'],
      shmSize: '2g'
    }    
  },
  ```

### 2.2.  CHROME HEADLESS
- In wdio.conf.js file add below code to make browser headless
```
"goog:chromeOptions": {
				args: ['headless', 'disable-gpu'],
			},
```

### 2.2. TEST REPORTS
- (`Spec Reporter`)[https://webdriver.io/docs/spec-reporter.html]

### 2.3. RUN TEST
Use the below command to run the test
```npm test```

### 2.3.1 Video of Running Test
```https://streamable.com/t59jac```


## 3.0 Continious Integration & Continious Deployment
* Jenkinsfile written using groovy code, which enables the capability to run the automated test in CI-CD.


### 4.0 Folder Structure
```
├── README.md
├── features
│             ├── emailSubscription.feature
│             ├── pageobjects
│             │             ├── emailSubscription.page.js
│             │             ├── page.js
│             │             └── secure.page.js
│             └── step-definitions
│             └── steps.js
├── package.json
└── wdio.conf.js
```
