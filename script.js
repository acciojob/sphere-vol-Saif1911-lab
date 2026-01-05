function volume_sphere(e) {
    e.preventDefault();

    const radius = Number(e.target.radius.value);
    const volumeEle = e.target.volume;

    if (isNaN(radius) || radius <= 0) {
        volumeEle.value = 'NaN';
        return; // stop execution
    }

    const result = (4 / 3) * Math.PI * Math.pow(radius, 3);

    volumeEle.value = result.toFixed(4);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
