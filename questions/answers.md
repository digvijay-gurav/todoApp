### What are the ways of evaluating FE performance?
There are many open source tools and plugins that can help identify how the web application. From page analytics tool like Google page analytics or Pendo we can target the different pages of the application that are consuming more time to render than expected. Also we can monitor the performance over a fixed amount of time.
Once the pages are identified we can take help of tools/plugins like Lighthouse which is a website auditing tool or PageSpeed Insights that tells how the application performs under different viewing modes/browser.(mobile/desktop).
At the same time all the static content like CSS/JS files or images can be imported over CDN networks thus reducing the weight from servers.
Also can use Chrome UX report that asses how the site performs when user is interacting with its various features/components.
Also we can monitor the API request in terms of time taken to fetch data from developer tools options.

### What are the tools that are essential in developing FE applications with high quality?
- SPA framework
- Optimised bundling and packaging tool such as webpack, rollup, lerna , etc
- Optimising the use of assets using a cloud service provider. i.e managing the maximum file size, serving the reduced size image for mobile devices. 
- Using a monitoring tool to keep an eye on JS or api errors occurring on application.
- unit test library (jest, react testing library)
- e2e test case library (cypress)
- tool for adding common test cases for all frontend (iOS, android, web) eg: test rails

### What are the different ways of rendering pages and what are the use-case/pros and cons for each one?
# Server Side Rendered Application:
In server-side rendering when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the users machine. The browser then construes the content and displays the page. This entire process of fetching data from the database, creating an HTML page and sending it to client happens in mere milliseconds.
For every link relaed to the website, when a  user clicks the link on the page, the browser sends a request to the server and the entire process is carried out by the server again. This process not only increases the load on the server but also consumes unnecessary internet bandwidth.
pros:
 - Search engines can crawl the site for better SEO.
 - The initial page load is faster.
 - Great for static sites.
cons:
 - Frequent server requests.
 - An overall slow page rendering.
 - Full page reloads.
 - Non-rich site interactions.

# Client Side rendered Application:
this is about rendering content in the browser using JavaScript. So instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.
With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast. In this approach, communication with server happens only for getting the run-time data. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.
pros:
 - Rich site interactions
 - Fast website rendering after the initial load.
 - Great for web applications.
 - Robust selection of JavaScript libraries.
cons:
 - Low SEO if not implemented correctly.
 - Initial load might require more time.
 - In most cases, requires an external library.

# How can we ensure that FE is working well in production?
To start with we can have a staging environment set up which is similar to production environmet and monitor/test the application this environment before taking it to live/production environment.
A proper sanity testing on possible web browsers and checking for responsive layout on different screen resolution sizes.
Also at code level there should be proper error handling logic in place where there is possibility of JavaScript throwing errors. Cn make use of try catch blocks to address this issue so that even if something breaks it doesnotimpact the overall User experience.
Also we can monitor the application by checking Core web vitals and monitoring tools


# What are the parameters to take into account before adding a new library to the project?
Whichever library we have decided to include we first need to make sure how much of its functionality/featres are we going to use. If its minimum we can write a simple config/util libary that can replicate the same behaviour.
Making sure the library solves the intended purpose of use in own application and also has room for customization.
The download count, library/package size, compatibility with SPA frameowrk and commnunity support around the library should also be considered.