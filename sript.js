window.onload = function mulaiCrash() {
    let alarm = document.getElementById("alarm");
    alarm.play();

    let count = 0;

    // Spam elemen ke halaman
    let spam = setInterval(() => {
        let div = document.createElement("div");
        div.textContent = "ERROR " + count++;
        div.style.position = "absolute";
        div.style.top = Math.random() * window.innerHeight + "px";
        div.style.left = Math.random() * window.innerWidth + "px";
        div.style.color = "red";
        div.style.fontSize = "20px";
        document.body.appendChild(div);
    }, 10); // spam sangat cepat

    // Background kedip-kedip
    let blink = setInterval(() => {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === "black" ? "white" : "black";
    }, 50);

    // Force reflow
    let lag = setInterval(() => {
        document.body.style.transform = "scale(1." + Math.floor(Math.random() * 10) + ")";
    }, 30);

    // Setelah 7 detik, hentikan semuanya
    setTimeout(() => {
        clearInterval(spam);
        clearInterval(blink);
        clearInterval(lag);
        document.body.innerHTML = "<h1>PRANK BERHASIL!</h1>";
        document.body.style.backgroundColor = "white";
        alarm.pause();
        alarm.currentTime = 0;
    }, 7000);
}
