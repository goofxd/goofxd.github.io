      window.RufflePlayer = window.RufflePlayer || {};
      window.RufflePlayer.config = {
      letterbox: "on",
      autoplay: "on",
      backgroundColor: null,
      unmuteOverlay: "hidden",
}
     window.RufflePlayer = window.RufflePlayer || {};
    window.addEventListener("load", (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("container");
        container.appendChild(player);
        player.load("pacman.swf"); 
	
    });
