# What is a domain name?

see [What is a domain name?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name)

> Domain names are a key part of the Internet infrastructure. They provide a human-readable address for any web server available on the Internet.

## Summary

**NOTE**: Any Internet-connected computer can be reached through a public IP Address.

IP Address (32 bits for IPv4):

- four numbers
- between 0 and 255
- separated by "."
- *Example*:
  - **173.194.121.32**

IP Address (128 bits for  IPv6):

- eight groups of 4 hexadecimal numbers
- separated by colons
- *Example*:
  - **2027:0da8:8b73:0000:0000:8a2e:0370:1337**

**NOTE**: IP addresses are hard to remember and might change over time, thus use human-readable addresses called **domain names**

## Deeper dive

### Structure of domain names

**developer.mozilla.org**

**label2.label1.TLD**

- read from right to left

#### TLD (Top-Level Domain)

- provides generic information
- general purpose of service behind domain name

**Generic TLDS**: **.com**, **.org**, **.net**

**TLDs (Stricter Policies)**:

- Local TLDs: **.us**, **.fr**, or **.se**
  - Require service to provided in given language or hosted in a certain country
- **.gov**
  - used by government departments
- **.edu** and **.ac.uk**
  - used by educational/academic institutions

**NOTE**: TLDs can contain special as well as latin characters, and their maximum length is 63 characters, although most are around 2–3

#### Label (or component)

- labels follow the TLD
- label right before the TLD, aka **Secondary Level Domain (SLD)**
- for any domain name, can create:
  - **"subdomains"**
    - with different content located at each
    - Ex. developer.mozilla.org
    - Ex. iot.mozilla.org

### Buying a domain name

- *CANNOT* "buy a domain name"
- pay for the right to use a domain name for one or more years
- can renew the right
- companies called registrars use domain name registries to keep track of technical and administrative information connecting you to your domain name.

*SIDENOTE*: **.fire** is managed by Amazon

#### Finding an available domain name

- Check domain name registrar's website.
  - Check if provide "whois" service
- If use system with built-in shell, type command:
  - **$ whois mozilla.org**

#### DNs refreshing

- DNS databases are stored on every DNS server worldwide
- all these servers refer to a few special servers called: 
  - “authoritative name servers” or
  - “top-level DNS servers”
- whenever registrar creates or updates any information for a domain
  - information must be refresed in every DNS database

### How does a DNS request work?

1. Type **mozilla.org** in browser bar
2. Browser asks computer if already recognizes IP address (local DNS cache)
3. If computer knows, then negotiates content with server.
4. If computer does **NOT** know, goes to DNS server
5. DNS server tells computer IP address (match to domain name)
6. Negotiates content with server