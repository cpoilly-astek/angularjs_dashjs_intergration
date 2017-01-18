var dash;

var player, firstLoad = true;

dash = {
    init: function () {
        player = dashjs.MediaPlayer().create();
        player.getDebug().setLogToBrowserConsole(false);
    },

    log: function (msg) {
        msg = msg.length > 90 ? msg.substring(0, 90) + "..." : msg; // to avoid wrapping with large objects
        var tracePanel = document.getElementById("trace");
        tracePanel.innerHTML += msg + "\n";
        tracePanel.scrollTop = tracePanel.scrollHeight;
        console.log(msg);
    },

    showEvent: function (e) {
        dash.log("EVENT RECEIVED: " + e.type);
        // We double process in order to pretty-print. Only two levels of object properties are exposed.
        for (var name in e) {

            if (typeof e[name] != 'object') {
                dash.log("    " + name + ": " + e[name]);
            }
        }
        for (name in e) {
            if (typeof e[name] == 'object') {
                dash.log("    " + name + ":");
                for (name2 in e[name]) {
                    dash.log("        " + name2 + ": " + JSON.stringify(e[name][name2]));
                }
            }
        }
    },

    setListener: function (eventName) {
        player.on(dashjs.MediaPlayer.events[eventName], this.showEvent);
        var element = document.createElement("input");
        element.type = "button";
        element.id = eventName;
        element.value = "Remove " + eventName;
        element.onclick = function () {
            player.off(dashjs.MediaPlayer.events[eventName], this.showEvent);
            document.getElementById("eventHolder").removeChild(element);
        };
        document.getElementById("eventHolder").appendChild(element);
    },

    load: function (button) {
        // Add your own URL in here if you wish to epxlore events with other content.
        var url = "http://rdmedia.bbc.co.uk/dash/ondemand/testcard/1/client_manifest-events.mpd";

        if (!firstLoad) {
            // re-initialize as removed when changed viewport// todo: optimisation -> initialize only if needed
            player.initialize(document.querySelector("video"), url, true);
            player.attachSource(url);
        }
        else {
            firstLoad = false;
            button.value = "RELOAD PLAYER";
            player.initialize(document.querySelector("video"), url, true);
        }
        document.getElementById("trace").innerHTML = "";
    }

}