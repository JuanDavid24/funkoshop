let toast = new Toasty();

let configuration = {
    transition: 'slideRightFade', 
    enableSounds: true, 
    progressBar: true, 
    sounds: {
        info: "/ext/toasty/sounds/info/1.mp3",
        success: "/ext/toasty/sounds/success/1.mp3",
        warning: "/ext/toasty/sounds/warning/1.mp3",
        error: "/ext/toasty/sounds/error/1.mp3",
    }
}

toast.configure(configuration);


