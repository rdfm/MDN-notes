# MVC

see [MVC (Model-View-Controller)](https://developer.mozilla.org/en-US/docs/Glossary/MVC#MVC_on_the_web)

**MVC** = Model-View-Controller

- a pattern in software design
- commonly used to implement user interfaces, data, and controlling logic
- emphasizes a separation between the software’s business logic and display.
- "separation of concerns" provides for a better division of labor and improved maintenance.

*NOTE*: Other design patterns are based on MVC, such as

- MVVM (Model-View-Viewmodel)
- MVP (Model-View-Presenter)
- MVW (Model-View-Whatever)

Three parts of the MVC software-design pattern:

1. **Model**: Manages data and business logic.
2. **View**: Handles layout and display.
3. **Controller**: Routes commands to the model and view parts.

## Model View Controller example

*EXAMPLE*: Shopping List App

- A list of the name, quantity, and price of each item needed

### The Model

> Defines data structure (Ex: updates app to reflect added item)

- model defines what data the app should contain
- if state of this data changes:
  - model -> notifies the view (display can change as needed)
  - model -> (sometimes) notifies the controller (if different logic is needed to control the updated view)

*Example (Shopping List App)*: model would specify what data the list items should contain — item, price, etc. — and what list items are already present

### The View

> Defines display (UI) (Ex. user clicks 'add to cart')

- view defines how the app's data should be displayed

*Example (Shopping List App)*: view would define how the list is presented to the user, and receive the data to display from the model

### The Controller

> Contains control logic (Ex. recieves update from view then notifies model to 'add item')

- controller contains logic that updates the model and/or view in response to input from the users of the app.

*Example (Shopping List App)*:

- could have input forms and buttons that allow us to add or delete items.
- these actions require the model to be updated:
  - input is sent to the controller
  - then manipulates the model
  - then sends updated data to the view

*NOTE*: Can just update the view to display the data in a different format

- Ex. change the item order to alphabetical, or lowest to highest price.
- in this case the controller could handle this directly without needing to update the model

## MVC on the web

*EXAMPLES*:

- data model contained in a database
  - traditional server-side database: MySQL
  - client-side solution: [MDN: IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- controlling code written in HTML/JavaScript
- user interface written in HTML/CSS

> In the early days of the Web, MVC architecture was mostly implemented on the server-side, with the client requesting updates via forms or links, and receiving updated views back to display in the browser. However, these days, more of the logic is pushed to the client with the advent of client-side data stores, and XMLHttpRequest allowing partial page updates as required.

*NOTE*: Web frameworks that implement an MVC architecture (in different ways)

[AngularJS](https://angularjs.org/)

[Ember.js](https://emberjs.com/)