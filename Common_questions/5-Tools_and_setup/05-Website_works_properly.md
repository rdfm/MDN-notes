# How do you make sure your website works properly?

see [How do you make sure your website works properly?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Checking_that_your_web_site_is_working_properly)

> So you've published your website online — very good! But are you sure it works properly? This article provides some basic troubleshooting steps.

## Test in your browser

Firefox: Tools > Web Developer > Network

### HTTP statuses

#### 200: OK

- resource asked for delivered

#### 301: Moved permanently

- resource moved to new location (not seen much, used to update indexes)

#### 304: Not modified

- file has not changed since last time asked for
- thus browser, can display version from its cache

#### 403: Forbidden

- NOT allowed to display resource
- usuallay configuration mistake (host forgot to give access rights to directory)

#### 404: Not found

- NOT found

#### 500: Internal server error

- Something wrong with the server
- Examples: PHP stopped working, web server configuration, etc.

#### 503: Service unavailable

- shortterm system overload
- problem with the server

### Fixng the 404

## Frequent Errors

### Typos in address

### 404 Errors

### JavaScript errors

Firefox: Tools > Web developer > Web Console

### More things to check

#### How's the performance

Resources:

- [WebPagetest.org](https://www.webpagetest.org/)
- [YSlow](http://yslow.org/)

#### Is th server responsive enough

**ping** , shell tool that tests domain name and tells if server's responding

In terminal:

```vim
$ ping mozilla.org
```

Example:

```vim
ping mozilla.org
PING mozilla.org (63.245.208.195): 56 data bytes
64 bytes from 63.245.208.195: icmp_seq=0 ttl=53 time=18.488 ms
64 bytes from 63.245.208.195: icmp_seq=1 ttl=53 time=18.223 ms
64 bytes from 63.245.208.195: icmp_seq=2 ttl=53 time=13.682 ms
64 bytes from 63.245.208.195: icmp_seq=3 ttl=53 time=15.959 ms
^C
--- mozilla.org ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 13.682/16.588/18.488/1.944 ms
```

**NOTE**: To stop (send "interupt" signal), **Ctrl + C**

## A simple checklist

- Check for 404's
- Make sure all webpages are behaving as you expect
- Check your website in several browsers to make sure it renders consistently
