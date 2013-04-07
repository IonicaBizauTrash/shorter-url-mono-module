"use strict";

define(["/jquery.js"], function () {

    // On load
    function init(config) {
        self = this;
        
        // Insert a new url
        $(".btn-insert").on("click", function() {
            var longUrl = $("#long-url").val().trim();

            self.link("insert", { "data": longUrl }, function(err, url) {
                console.log(url);
            });
        });
        
        // Go to url
        $(".btn-get").on("click", function() {
            var urlCode = $("#short-url").val().trim();

            self.link("get", { "data": urlCode }, function(err, url) {
                console.log(url);
                return;
                window.location = url;
            });
        });
    }
    
    return init;
});
