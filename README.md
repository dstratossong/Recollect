Recollect
=========

This repository contains a simple Photo Frame hybrid application built using the Ionic framework. 

Note: This repository has been changed to be the product of David Song and Arshan Alam in DementiaHack 2015, hosted by HackerNext Toronto. This change is due to a reuse of the name "Recollect". 

The purpose of this application is to capture any memories shared by family members, and showcase them like a photo frame when it is on standby. 


### Prerequisites

- Node.js
- Cordova Ionic
- Gulp


### Building

```
npm install              # installing more dependencies
```

### Deploying 

Deploy to a web page with the following command (the camera API will not work)

```
ionic serve
```

On Linux, deploying to an Android device is extremely simple. 

- Download the Android SDK from Google.
- Unpack the tarball and make sure its tools directory is in its path
- Run `android sdk` and install the latest SDK Platform-tools and SDK Build-tools, as well as SDK Platform of Android 22 (as of this version of Ionic)
- Enable developer mode on your Android device and turn on USB Debugging
- When that is all done, simply plug in the device and run `ionic run android`



