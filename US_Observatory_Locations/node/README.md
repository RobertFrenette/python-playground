# Node.js App

This script launces an HTTP Server to handle AJAX requests from the Client. It spawns a python3 child process to scrape a web page,then returns the data as a JSON payload.

Although we could call Python directly (ex: Flask Server), this example demonstrates interaction between a web client (JavaScript / AJAX), a Node http Server,and an external process (Python).


To Launch
```
$ cd node
$ node server.js
Node server listening at http://127.0.0.1:3000.
```
 
 
To Test
 * Get data for Regions: `http://127.0.0.1:3000?action=regions&dataURL=/wiki/Category:Astronomical_observatories_in_the_United_States`
 * Get data for all States in Region: `http://127.0.0.1:3000?action=states&dataURL=/wiki/Category:Astronomical_observatories_in_the_United_States_by_state`
 * Get data for all Observatories in specific State: `http://127.0.0.1:3000?action=observatories&dataURL=/wiki/Category:Astronomical_observatories_in_Connecticut`
 * Get data for Specific Observatory: `http://127.0.0.1:3000?action=observatory&dataURL=/wiki/Van_Vleck_Observatory`
