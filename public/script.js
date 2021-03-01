const socket=io('/')
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
let myVideoStream;
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
}).then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
});
socket.emit('join-room', ROOM_ID);
socket.on('user_connected', () => {
    connectToNewUser();
})

function addVideoStream(video, stream) {
	video.srcObject = stream;
	video.addEventListener("loadedmetadata", () => {
		video.play();
	});
	videoGrid.append(video);
}
function connectToNewUser() {
    console.log('someone on front connected');
}