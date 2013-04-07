var links = {};

exports.get = function (link) {
    
    if (link.data) {
        var url = links[link.data];
        
        if (url) {
            link.send(200, url);
            return;
        }

        link.send(200, "Invalid short url.");
        return;
    }

    link.send(200, "No data sent to me.");
}

exports.insert = function (link) {

    // TODO: validation

    if (link.data) {
        var url = generate(4);

        while (links[url]) {
            url = generate(4);
        }

        links[url] = link.data;
        link.send(200, url);
        return;
    }

    link.send(200, "No data sent to me.");
}

exports.delete = function (link) {
    
    if (link.data === "deleteAll") {
        links = {};
        link.send(200);
        return;
    }

    link.send(200, "Invalid password");
}

function generate(l) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz";

    var res = "";

    for (var i = 0; i < l; i++) {
        res += letters[Math.floor(Math.random() * letters.length)];
    }

    return res;
}

