# NYT: Top 20 Science News
This website shows you the **20** most popular New York Times science news stories.
## Requirements:
This solution aims to fulfill the following requirements, in order of priority:
- Display a list of articles.
- Implement a search feature to dynamically filter articles.
- Search terms should match against the following article attributes:
    - title
    - byline
    - section

## Getting started
Before you start, please make sure to set up the correct environment variable. At the root of folder (nyt-top-20-sience-news), please create a `.env` file with the following content:

```
REACT_APP_NYT_API_KEY=<YOUR API KEY HERE>
```
You can find an API key in the parent README.md.

Visit the website [here](https://kevb10.github.io/code-challenge/index.html).

- `yarn install`: Installs dependencies for the project.
- `yarn start`: Runs app in development mode.
- `yarn test`: Runs the test watcher in an interactive mode.
- `yarn run deploy`: Builds and deploys app to github pages.
- `yarn lint`: Run linter. Use `--fix` to fix all fixable issues.


## Process
Here is the initial todo in order:
- [x] create react app
- [x] fetch endpoint
- [x] display basic stuff
- [x] search/filter fetched list
- [x] sort by latest update
- [x] enable linter
	- can be painful if enabled from the beginning 
- [x] style
	-	whip up a very simple design in figma so that I have a visual of what I want to build
	-	find a free template that matches it
- [x] update documentation
- [x] test (very little)
- [ ] some kind of pagination
- [ ] [https://developer.nytimes.com/docs/articlesearch-product/1/overview](https://developer.nytimes.com/docs/articlesearch-product/1/overview) you can use their article search api but i’m assuming we only look through top stories
- [ ] i wasn’t able to find how many API requests we’re allowed to have.
- [ ] hit the api for updates and only update app when there's a difference found

## Limitations
- Too many requests:

I actually got this error at some point. Ideally, we would want some kind of cache to prevent the website from making an API request for every page (re)load.  
- Ambiguity in number of top stories:

Not sure how many stories there are in _top stories_. There were 23 in this cases but is it possible for it to be 100 or 1000? 80% of the time it's _probably_ less than 50. There are several options here:
	- Infinite scrolling (popular for news websites)
	- Lazy-loading 
	- Pagination
	
A [good article about these options](https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/), specifically for ecommerce.
Ideally I would do infinite scrolling because, besides the performance benefits, it also retains people to keep browsing. With this approach, we know that there _should_ at least be enough articles to cover the full page. Which means, we won't have to load them all at once. So, whether it's 10 or 100000 won't matter since we're loading small chunks at a time.

**For the sake of time, I chose to chop down the number of news to only the top 20 🔥 stories and lazily load images (pure HTML way).** 
- Search:

I assumed that users would only be searching from the list of top news I provided them. So this would only search in the top 20. If we wanted to search within the full list, we can have a dedicated search page. If we want to take it further, we can even search for other related articles in NYT in general using [their dedicated search API](https://developer.nytimes.com/docs/articlesearch-product/1/overview).
- PropTypes `any`:

I have a list of objects. The object values can be composed of null, array, and/or string. It ends up being verbose and repeated in multiple places. Ideally, the actual structure along with the types should be defined in one place and use it wherever needed. I believe a static type checker like TypeScript and Flow comes in handy here.
- Tests:

Ideally, we'd want to test most components. I was only able to write a couple in the given time. 

## Resources
- [NYT API](https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil)
- [React Bootstrap](https://react-bootstrap.github.io/)
	- Bootstrap as true React components. 
- [Boostrap template](https://getbootstrap.com/docs/4.0/examples/album/)
	- Allowed me to save time by copying the template structure.
- [moment.js](https://momentjs.com/)
	- Effortlessly format date & time.
