{ <script>
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('myVideo').addEventListener('play', function(){
    document.getElementById('video-title').style.opacity = 0;
  });
});

function scrollToElement(selector) {
    var element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script> }


// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById('myVideo').addEventListener('play', function(){
//     document.getElementById('video-title').style.opacity = 0;
//   });
// });

// function scrollToElement(selector) {
//     var element = document.querySelector(selector);
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
// }