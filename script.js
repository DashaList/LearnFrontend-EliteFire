const slider = document.getElementById('slider');

slider.addEventListener("mousemove", () => {
    const x = (slider.value - 0.5) / 9.5 * 100;
    const color = 'linear-gradient(90deg, #FFCF7A ' + x + '%, #646464 ' + x + '%)';
    slider.style.background = color;
});