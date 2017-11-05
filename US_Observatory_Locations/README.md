# US Observatory Locations

This Python app obtains data for US Observatory Locations. (Data is scraped from the Wiki website.)

Note: Some Observatories on the Wiki site do not have Lat/Lng values, or they follow an inconsistent format. However, this is not determined until the Map is constructed.
As a result, you will get an Alert indincating Lat/Lng not availble. 


The following Selections will produce the desired testing result:
 * Region: the United States by state
 * State: Connecticut
 * Observatories: Olin Observatory, Van Vleck Observatory
 
 
Future enhancements:
 * Remove Observatories with no Lat/Lng from Select Element. This could be expecnsive, as it will require a Service call when building the List Items -vs- when displaying the Map.
 * Handle different formatting of Lat/Lng on Wiki site.


### To Execute
```
$ cd node
$ node server.js
Node server listening at http://127.0.0.1:3000.
```

Then open index.html in your Browser. Note this page is not served from Node.

See py and node directories for implementation details.
