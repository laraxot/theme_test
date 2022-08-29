

$(function () {
    // https://www.npmjs.com/package/select2-bootstrap-5-theme
    /* -- non posso prendere tutti i select
    $("select").select2({
        theme: "bootstrap-5",
        //width: '100%',
        dropdownParent: $(".modal-body")
    });
    */
    //https://select2.org/troubleshooting/common-problems
    $.fn.modal.Constructor.prototype.enforceFocus = function() {};
});

//https://ottball.com/lazy-loading-video/
//https://web.dev/lazy-loading-video/
document.addEventListener("DOMContentLoaded", function() {
    var videos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var videoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            video.poster = video.dataset.poster;
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            videoObserver.unobserve(video.target);
          }
        });
      });
  
      videos.forEach(function(video) {
        videoObserver.observe(video);
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    if ("IntersectionObserver" in window) {
        var iframes = document.querySelectorAll("iframe.lazy");
        var iframeObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && entry.target.src.length == 0) {                    
                    entry.target.src = entry.target.dataset.src;
                    iframeObserver.unobserve(entry.target);
                }
            });
        });

        iframes.forEach(function (iframe) {
            iframeObserver.observe(iframe);
        });
    } else {
        var iframes = document.querySelector('iframe.lazy');

        for (var i = 0; i < iframes.length; i++) {
            if (lazyVids[i].getAttribute('data-src')) {
                lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('data-src'));
            }
        }
    }
});