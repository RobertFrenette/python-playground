/**
 * This function is executed when the document is ready for processing.
 * It calls the getData() function in controller.js
 * to retrieve the list of Observatories for display on the page.
 */
$(document).ready(function() {
    getData('regions', '/wiki/Category:Astronomical_observatories_in_the_United_States');
});