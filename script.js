document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = String(circumference);
    circle.style.strokeDashoffset = String(circumference);

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = String(offset);
    }

    // Example usage: Set to 50% for demonstration
    setTimeout(() => {
        setProgress(50);
    }, 2000)
    setTimeout(() => {
        setProgress(75);
    }, 4000)
});
