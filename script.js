function volume_sphere(e) {
    e.preventDefault();

    const radiusInput = document.getElementById("radius");
    const volumeEle = document.getElementById("volume");

    const radius = Number(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        volumeEle.value = "NaN";
        return;
    }

    const result = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeEle.value = result.toFixed(4);
}

window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
