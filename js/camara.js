function camara(){
    $('#profile_pic').append('<video id="video" autoplay="true" width="300px" height="225px"></video>');

    navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream)=> {
        console.log(stream)
    
    let video =  document.getElementById('video')
    
    video.srcObject = stream 
    
    }).catch((err)=>console.log(err))
}

function camaraout(){
    const video = document.querySelector('video');
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks[0].stop();
    tracks.forEach(track => track.stop());
}

