// b side of the call
var client = respoke.connect({
    appId: "e2896b2a-d466-4f82-881f-c4ca08a83123",
    developmentMode: true,
    endpointId: "b",
    onConnect: console.log('connected')
});

// listen for the 'call' event
client.listen('call', function(evt) {
    evt.call.answer({
        onConnect: function (evt) {
            document.getElementById('remoteVideoSource').innerHTML = evt.element.outerHTML;
            },
        onLocalMedia: function (evt) {
            document.getElementById('localVideoSource').innerHTML = evt.element.outerHTML;
        }
    });
});

