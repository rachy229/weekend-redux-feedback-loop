# PROJECT NAME

## Description

_Duration: 3 hours_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

This application allows a user to submit feedback. They are able to navigate through multiple screens and review their answers before submitting.  

## Screen Shot

![screenshot] (feelingScreenshot.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `prime_feedback`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. The application will begin on a page that asks "How are you feeling".
2. You must enter a number 1-5 in order to progress to the next page.
3. When you click the "Next" button, you will be brought to a page that asks "How well are you understanding the content?".
4. Enter in a number from 1-5 and click "Next".
5. You will be brought to a page that asks "How well are you being supported?". 
6. Enter a number 1-5 and click "Next".
7. You will be brought to a page that asks "Do you have any comments?"
8. This is optional. Enter a response if you wish, then click "Next".
9. You will be brought to a review page. All of you answers will be displayed. 
10. Click the "Submit" button to send your answers to the databse. 
11. You will see a thank you page. Click the "Submit New Feedback" button to start over.


## Built With

HTML, CSS, JavaScript, React, Redux, SQL

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [rachelbruce922@gmail.com]