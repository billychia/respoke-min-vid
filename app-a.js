// a side of the call
var client = respoke.connect({
    appId: "e2896b2a-d466-4f82-881f-c4ca08a83123",
    developmentMode: true,
    endpointId: "a",
    onConnect: startCall
});

//send call to b
function startCall () {
    client.startCall({
        endpointId: "b",
        onConnect: function (evt) {
            document.getElementById('remoteVideoSource').innerHTML = evt.element.outerHTML;
            },
        onLocalMedia: function (evt) {
            document.getElementById('localVideoSource').innerHTML = evt.element.outerHTML;
        }
    });
}