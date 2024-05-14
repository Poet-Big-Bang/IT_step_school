
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById('myVideo').addEventListener('play', function () {
                document.getElementById('video-title').style.opacity = 0;
            });
        });

        function scrollToElement(selector) {
            var element = document.querySelector(selector);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
 
        function toggleText(button) {
            var cardContent = document.querySelector('.card-about-us-content');
            cardContent.classList.toggle('show');
            if (cardContent.classList.contains('show')) {
                button.textContent = 'Hide';
            } else {
                button.textContent = 'Learn More';
            }
        }

        // let slideIndex = 0;
        // showSlides();
        
        // function showSlides() {
        //   let i;
        //   const slides = document.getElementsByClassName("img-slide");
        //   for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        //   }
        //   slideIndex++;
        //   if (slideIndex > slides.length) {
        //     slideIndex = 1;
        //   }
        //   slides[slideIndex - 1].style.display = "block";
        //   setTimeout(showSlides, 2000); // Change image every 2 seconds
        // }
        
        // document.getElementById("prevBtn").addEventListener("click", () => {
        //   slideIndex--;
        //   showSlides();
        // });
        
        // document.getElementById("nextBtn").addEventListener("click", () => {
        //   slideIndex++;
        //   showSlides();
        // });
        let currentSlide = 0;
        const slides = document.querySelectorAll('.img-slide');
        const totalSlides = slides.length;
    
        document.getElementById('nextBtn').addEventListener('click', function() {
            changeSlide(1);
        });
    
        document.getElementById('prevBtn').addEventListener('click', function() {
            changeSlide(-1);
        });
    
        function changeSlide(direction) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
            slides[(currentSlide + 1) % totalSlides].classList.add('active');
        }
    
        // Initialize the first two slides as active
        slides[currentSlide].classList.add('active');
        slides[(currentSlide + 1) % totalSlides].classList.add('active');

