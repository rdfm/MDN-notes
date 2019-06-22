# Introduction to the server side

see[Introduction to the server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)

> Most large-scale websites use server-side code to dynamically display different data when needed, generally pulled out of a database stored on a server and sent to the client to be displayed via some code (e.g. HTML and JavaScript).

## What is server-side website programming?

**HTTP**: HyperText Transfer Protocol

- web browsers communicate with web servers using HTTP
- *HTTP Request*, sent from browser to the server, when:
  - click a link
  - submit a form
  - run a search

**HTTP Request**, includes:

- URL identifying the affected resource
- method that defines the required action (ex. to get, delete, or post the resource)
- may include additional information encoded in URL parameters (the field-value pairs sent via a query string), as POST data (data sent by the HTTP POST method), or in associated cookies.

**HTTP Response**:

- Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP response message.
- The response contains a status line indicating whether or not the request succeeded (e.g. "HTTP/1.1 200 OK" for success)

### Static sites

*static site*: returns the same hard-coded content from the server whenever a particular resource is requested. 

**NOTE**: When a user wants to navigate to a page, the browser sends an HTTP "GET" request specifying its URL.

### Dynamic sites

*dynamic site*:

- site where some of the response content is generated dynamically only when needed
- HTML pages are normally created by inserting data from a database into placeholders in HTML templates
- can return different data for a URL based on information provided by the user or stored preferences and can perform other operations as part of returning a response (e.g. sending notifications)
- Most of the code to support a dynamic website must run on the server.
- Creating this code is known as **"server-side programming"** (or sometimes **"back-end scripting"**)

## Are server-side and client-side programming the same?

**client-side code**: code running in the browser

- includes selecting and styling UI components, creating layouts, navigation, form validation, etc.

**web frameworks**: 

## What can you do on the server-side?

### Efficient storage and delivery of information

### Customised user experience

### Controlled access to contentSection

### Store session/state information

**sessions**: a mechanism that allows a server to store information on the current user of a site and send different responses based on that information

### Notifications and communication

### Data analysis

