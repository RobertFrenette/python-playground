# Node.js App

This script launces an HTTP Server to handle AJAX requests from the Client. It spawns a python3 child process to scrape a web page, then returns the data as a JSON payload.

Although we could call Python directly (ex: Flask Server), this example demonstrates interaction between a web client (JavaScript / AJAX), a Node http Server, and an external process (Python).

To Launch
 * node server.js
 
To Test
 * Get data for all Mountains: `http://127.0.0.1:3000?action=mountains&dataURL=/`
 * Get details for specific Mountain: `http://127.0.0.1:3000?action=mountain&dataURL=/hiking-mount-washington`
