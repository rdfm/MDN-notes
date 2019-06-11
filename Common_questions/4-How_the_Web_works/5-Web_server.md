# What is a web server?

see [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)

> The term "Web server" can refer to the hardware or software that serves web sites to clients across the Web — or both of them working together. In this article we go over how web servers work, and why they're important.

## Summary

"**Web server**" can refer to hardware or software:

**Web server (Hardare -> Computer)**:

- computer that stores web server software
- stores a website's component files
  - HTML documents, images, CSS stylesheets, and JavaScript files
- connected to the Internet
- supports physical data interchange with other devices connected to the web

**Web server (Software)**:

- includes several parts that control how web users access hosted files
- HTTP server
  - piece of software that understands
    - URLs (web addresses)
    - HTTP (the protocol browsers use to view webpages)
  - accessed through domain names (i.e. mozilla.org) of websites in hardware
  - delivers content to end-user's device

*EXAMPLE (Basic Level)*:

- browser requests file from web server (via HTTP)
- requet reaches correct web server (hardware)
- HTTP server (software) accepts request
- HTTP server finds requested document
  - If NOT able to find, returns a 404 response
- HTTP server sends request file back to browser (via HTTP)

### To publish a website, need

**static web server**:

- aka *stack*
- consists of computer (hardware) with an HTTP server (software)
- called "static", becasue server sends its hosted files "as-is" to the browser

OR

**dynamic web server**:

- consists of a static web server
- plus extra software (most common):
  - application server
  - datavase
- called "dynamic", because application server updates the hosted files (before sending to browser via HTTP)

## Deeper dive

### Hosting files

**NOTE**: Technically can host files on personal computer, but far more convenient to host files on a "dedicated server"

**dedicated server**:

- is always up and running
- is always connected to the Internet
- has the same IP address all the time (not all ISPs provide a fixed IP address for home lines)
- is maintained by a third-party provider

### Communicating through HTTP

**HTTP** = **H**yper**t**ext **T**ransfer **P**rotocol

- HTTP specifies how to transfer hypertext (i.e., linked web documents) between two computers.

**Textual**:

- All commands are plain-text and human-readable.

**Stateless**:

- Neither the server nor the client remember previous communications.
  - Ex. Server CANNOT remember:
    - password typed
    - step on during a transaction

**NOTE**: Clear rules for how a client and server communicate, **[MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)**

### Static vs. dynamic content

**EXAMPLE**:

- Application server: *Kuma*
- Build with *Python*
- Using the *Django* framework

**NOTE**: No need to create own application server