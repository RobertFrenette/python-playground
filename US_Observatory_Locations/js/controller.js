// Scripts for connecting view to "model" (node.js -> python),

/**
 * This function initiates an AJAX call to the Node.js server.js script
 * to retrieve Observatory information for display on the page.
 * When the AJAX call returns, it passes the JSON payload to the appropriate function
 * to build the page display.
 *  
 * Process Flow:
 * HTML/JavaScript (AJAX request) -> Node -> Python (scrape Wiki page(s) to create JSON) -> Node -> HTML/JavaScript (AJAX response)
 * 
 * action: identifies the type of web page scrape to be performed (python)
 * dataURL: url to retrieve data from wiki
 */
function getData(action, dataURL) {
	// URL to Node Server
    targetURL = 'http://127.0.0.1:3000?action=' + action + '&dataURL=' + dataURL;
	console.log('AJAX targetURL: ' + targetURL);

	// make AJAX call to Node server
    $.ajax({
         url: targetURL,
         dataType: 'json',
         timeout: 5000,
         success: function(data) {
            json = $.parseJSON(data);
			//console.log(json);

            switch (action) {
                case 'regions': 
					// get list of Regions
                    processRegions(json);
                    break;
                case 'states':
					// get list of States for a spec Region
                    processStates(json);
                    break;
                case 'observatories':
					// get list of Observatories for specific State
                    processObservatories(json);
                    break;
                case 'observatory':
					// get data for specific Observatory
                    processObservatory(json);
                    break;
            }
         },
        error: function(xhr, textStatus, errorThrown) {
           alert('An error has occured making an AJAX call to: ' + targetURL);
        }
   });
}