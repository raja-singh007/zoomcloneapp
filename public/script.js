

let videoGrid = document.getElementById('video-grid')

let myVideo = document.createElement('video'); //created video element
myVideo.muted = true; //this is our own video so mute it so that ot donot play back to us.


let myVideoSteam; 

navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// console.log(navigator.mediaDevices.getUserMedia())
navigator.mediaDevices.getUserMedia({ //this is a promise that ask for permission 
    video:true,
    audio: false
}).then(async(stream)=>{
    // myVideoSteam = stream;
  await addVideoStream(myVideo,stream)//to add our video on screen
})

function addVideoStream(video,stream){ //this video is the videoObject on tne actual element
    video.srcObject = stream  //loading all data for this specific stream
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })
    videoGrid.append(video) //videoGrid is the region where the video will play
}
