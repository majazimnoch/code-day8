document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confetti-button").addEventListener("click", () => {
        let canvas = document.createElement("canvas");
        let container = document.getElementById("button-wrapper");
        canvas.width = 1000;
        canvas.height = 800;

        container.appendChild(canvas);

        let confetti_button = confetti.create(canvas);
        confetti_button().then(() => container.removeChild(canvas));
    });
});
