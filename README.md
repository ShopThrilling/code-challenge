# Thrilling Articles
## A frontend code challenge for *[Thrilling, Inc.](https://shopthrilling.com)*

**Designed by [joel hawkins](https://joel.fm), November 2020**


### Installation guide

Clone the repository to your local machine, ensure you have a recent version of Node and NPM (tested with Node v14.x) as well as Yarn, then simply run
```
yarn
yarn start
```
Then visit `http://localhost:3000` in your favorite browser.

### Known bugs

The only bug I know of occurs when hovering a card; the hover overlay does not extend the full length of the card. Despite my efforts, I could not figure a way to make it so and I will continue to lose sleep. This I will take to my grave.

### Possible extensions

* Implement UI / unit tests (didn't for lack of time)
* Design logo
* Share button actually shares content on some platform
* Tweak API call / implement pagination (so one could scroll a longer history of articles)

### Technologies

* React.js
* Node.js
* Material UI

## Initial Project Outline
Authored by Brad Mallow

This repository serves as a plain, forkable starting point for your frontend code challenge, which is intended to be an open-ended opportunity to show how you write code and solve problems.

In this challenge we would like you to access a JSON feed of the [most popular New York Times science articles](https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil) and use HTML, CSS and Javascript to create an interface to display them. Your solution should aim to fulfill the following requirements, in order of priority:
1. Display a list of articles.
1. Implement a search feature to dynamically filter articles.
1. Search terms should match against the following article attributes:
   1. title
   1. byline
   1. section

Your solution can use plain HTML, CSS, and vanilla JS, or you can use any languages, libraries, or frameworks you would like to achieve the task. We expect this project should take 2-3 hours, and would encourage you not to spend more than 3 hours on it.

You can access the API via the following link:
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil

Start by forking this repo. When you're finished please send a link to your public fork. In addition, if you can enable GitHub pages on your forked repo, so your solution can be easily previewed, that would be extra helpful.
