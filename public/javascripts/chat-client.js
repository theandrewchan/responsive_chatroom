function ChatClient() {
    var useWebSocket = false; // set to TRUE to use websockets if available
    if (window.WebSocket && useWebSocket){
        transport = ChatClient.WebSocket;
    } else {
        var transport = ChatClient.LongPoll;
    }

    transport.setup.call(this);
    this.subscribe = transport.subscribe;
    this.publish = transport.publish;
}

ChatClient.LongPoll = {
    setup: function() {
        // no-op
        return;
    },
    subscribe: function(callback) {
        var longPoll = function() {
            fetch("/messages").then(function(response) {
              return response.json();
            }).then(function(json) {
              callback(json);
              longPoll();
            });
        }
        longPoll();
    },
    publish: function(data) {
        fetch("/messages", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
        });
    }
}

ChatClient.WebSocket = {
    setup: function(){
        this.socket = new WebSocket('ws://localhost:3000')
    },
    subscribe: function(callback){
        this.socket.onmessage = function(event){
            callback(JSON.parse(event.data))
        }
    },
    publish: function(data){
        this.socket.send(JSON.stringify(data))
    }
}
