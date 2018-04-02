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
        /////////////////////////////
        // Q1: Long poll with fetch
        // Long poll the URL "/messages", e.g. send pending GET requests to it
        // using the fetch API. When you get a response, parse the response
        // to JSON and then call the given callback function on the parsed data.
        /////////////////////////////
        // YOUR CODE HERE
        /////////////////////////////
    },
    publish: function(data) {
        /////////////////////////////
        // Q2: POST request with fetch
        // Given an object, POST the object to the URL "/messages"
        // using the fetch API. Note that since our server does not support
        // form data, you should format your payload as JSON instead.
        /////////////////////////////
        // YOUR CODE HERE
        /////////////////////////////
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
