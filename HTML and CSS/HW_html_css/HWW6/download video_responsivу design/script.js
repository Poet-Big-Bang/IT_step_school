const progressBar = document.querySelector('.progress');
const percentDiv = document.querySelector('.percent');

function updateProgress() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        percentDiv.textContent = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progressBar.style.width = '0%';
                percentDiv.textContent = 'UPL';
                updateProgress();
            }, 0); // Задержка перед повторным запуском
        }
    }, 600); // Интервал обновления
}

updateProgress();