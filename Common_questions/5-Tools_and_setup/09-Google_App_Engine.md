# How do you host your website on Google App Engine?

see [How do you host your website on Google App Engine?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine)

> Looking for a place to host your website? Here's a step-by-step guide to hosting your website on Google App Engine.

## Creating a Google Cloud Platform project

1. Go to: [App Engine dashboard](https://console.cloud.google.com/appengine/)
2. Click: *Create*
3. Project Name: *GAE Sample Site* + Project ID: *gaesamplesite*
4. Click: *Create*

## Creating an application

1. Download: [sample app](https://gaesamplesite.appspot.com/downloads.html)
2. Check out: **app.yaml** file

## Publishing your application

1. Open [Google Cloud Shell](https://console.cloud.google.com/cloudshell/editor)
2. Drag and drop, sample-app folder
3. Run in cloud shell command line:

```
$ gcloud config set project gaesamplesite
$ cd sample-app
$ gcloud app deploy
```

4. Enter a number to choose the region where you want your application located.
5. Enter Y to confirm
6. navigate your browser to your-project-id.appspot.com to see your website online. For example, for the project ID gaesamplesite, go to gaesamplesite.appspot.com.

[Google App Engine Documentation](https://cloud.google.com/appengine/docs/)