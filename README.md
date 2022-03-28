# Guide for using test automation scripts to validate Hoeffner newsletter subscription
- it will simulate user actions in web browser and check if functionality works as expected.


## Tech stacks
- [`webdriver.io`](https://webdriver.io/)
- Cucumber framework  
- node,npm


## Test Scenario : Performing a newsletter subscription Hoeffner
## Test Cases in Gerkins Syntax :
```
Feature: Buying from Adidas UK platform

  Given Search for the word "running" and from the opened page
  When click on the first product
  When Verify that you have navigated to the correct product page by checking the URL
  When Pick any size and click on "Add to Bag" button
  When Verify that you have successfully added one item to the bag
  When Click on "View Bag" button and navigate to the cart page
  When Verify that you are on the cart page by the title "Your Bag"
  Then click on the Checkout button
  Then Verify that you're on the delivery page
  Then from the "Get Your Order" module, click "From A Collection Point"
  Then type "London" in the location text box
  Then click "Search for Collection Points" button
  Then from the list, pick any collection point
  Then Verify that correct collection point is selected
  Then Proceed to the payment step by “Review and Pay” Button
  Then Verify that major payment methods “PayPal” and “Credit Card” are present
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

### 2.3. RUN TEST
Use the below command to run the test
```npm test```

### 2.3.1 Video of Running Test


### 2.4. TEST REPORTS
- (`Spec Reporter`)[https://webdriver.io/docs/spec-reporter.html]




## 3.0 AUTOMATION FRAMEWORK

### 3.1.  Run test using DOCKER
- **NOTE**
  >Below code is not added in wdio.conf.js file, and added here to showcase. How the test can run using docker
 
 
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

### 3.2.  CHROME HEADLESS
- **NOTE**
  >Below code is not added in wdio.conf.js file, and added here to showcase. How the test can run using headless chrome.
 
 
- In wdio.conf.js file add below code to make browser headless
```
"goog:chromeOptions": {args: ['headless', 'disable-gpu'] },
```




## 4.0 Continuous Integration & Continuous Deployment
- **Jenkinsfile written using groovy code, which enables the capability to run the automated test in CI-CD**




### 5.0 Folder Structure
```
.
├── Jenkinsfile
├── README.md
├── features
│         ├── ShoppingAdidas.feature
│         ├── pageobjects
│   │   ├── addToCart.page.js
│   │   ├── delivery.page.js
│   │   ├── home.page.js
│   │   ├── page.js
│   │   ├── productDetail.page.js
│   │   ├── searchProduct.page.js
│   │   └── secure.page.js
│   └── step-definitions
│       ├── AddToCartSteps.js
│       ├── DeliverySteps.js
│       ├── HomeSteps.js
│       ├── ProductDetailSteps.js
│       └── SearchProductSteps.js
├── package.json
├── testdata
│   └── testdata.json
└── wdio.conf.js

4 directories, 18 files

```


### 6.0 Bugs
- I am not able to run the test because the adidas website is blocking me. This is the reason I am not sure whether my test are properly working or not.
- I wanted to optimize on certain locators but since I am unable to run the test even once, I gave up optimizing the locator.
