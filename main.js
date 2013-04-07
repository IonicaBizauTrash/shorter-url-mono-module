"use strict";

define(["/jquery.js"], function () {

    // On load
    function init(config) {
        self = this;
        
        // Insert a new url
        $(".btn-insert").on("click", function() {
            var longUrl = $("#long-url").val().trim();

            self.link("insert", { "data": longUrl } function(url) {
                console.log(url);
            });
        });
    }
    
    return init;
});
