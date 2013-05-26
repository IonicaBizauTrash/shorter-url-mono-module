module.exports = function (config) {
    self = this;
    
    // Insert a new url
    $(".btn-insert").on("click", function() {
        var longUrl = $("#long-url").val().trim();

        self.link("insert", { "data": longUrl }, function(err, url) {
            if (err) { return alert("ERROR: " + JSON.stringify(err)); }

            console.log(longUrl.length);

            alert("Copy this code: " + url + "\n" + 
                  "This will redirect you to your long url: " + 
                  (longUrl.length > 20 ? longUrl.substring(0, 10) + "..." + longUrl.substring(longUrl.length - 5) : longUrl));
        });
    });
    
    // Go to url
    $(".btn-get").on("click", function() {
        var urlCode = $("#short-url").val().trim();

        self.link("get", { "data": urlCode }, function(err, url) {
            window.location = url;
        });
    });
}
