const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    bodyRefs: document.querySelector('body'),
}

const randomColorBg = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const firstColor = randomIntegerFromInterval(0, colors.length)
            refs.bodyRefs.style.background = colors[firstColor];
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        this.intervalId = null;

    }
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', randomColorBg.start.bind(randomColorBg));
refs.stopBtn.addEventListener('click', randomColorBg.stop.bind(randomColorBg));