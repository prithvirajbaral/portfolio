document.getElementById('download-resume').addEventListener('click', function() {
    window.location.href = 'resume.pdf';
});
document.addEventListener("DOMContentLoaded", function() {
    // Modal references
    var imageModal = document.getElementById("imageModal");
    var img01 = document.getElementById("img01");
    var videoModal = document.getElementById("videoModal");
    var vid01 = document.getElementById("vid01");

    // Get all project image links
    var projectImgLinks = document.querySelectorAll(".project-img");

    // Function to open image modal
    function openImageModal(imgSrc) {
        imageModal.style.display = "block"; // Display the modal
        img01.src = imgSrc; // Set the image source
    }

    // Function to open video modal and start playback
    function openVideoModal(videoSrc) {
        videoModal.style.display = "block"; // Display the modal
        vid01.src = videoSrc; // Set video source
        vid01.play(); // Start playing the video
    }

    // Event listener for closing image modal
    var closeImgModal = document.getElementsByClassName("close")[0];
    closeImgModal.onclick = function() {
        imageModal.style.display = "none"; // Hide the modal
    }

    // Event listener for closing video modal
    var closeVideoModal = document.getElementsByClassName("close")[1];
    closeVideoModal.onclick = function() {
        videoModal.style.display = "none"; // Hide the modal
        vid01.pause(); // Pause the video
    }

    // Close modal when user clicks outside the modal (for both image and video modals)
    window.onclick = function(event) {
        if (event.target == imageModal) {
            imageModal.style.display = "none"; // Hide the image modal
        }
        if (event.target == videoModal) {
            videoModal.style.display = "none"; // Hide the video modal
            vid01.pause(); // Pause the video
        }
    }

    // Event listener for clicking on project images
    projectImgLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default action (if any)
            if (link.alt === "Bulk Rename Desktop Project" || "Hotel reservation Project") {
                openVideoModal(link.parentElement.getAttribute("data-video")); // Open video modal with data-video attribute
            } else {
                openImageModal(link.src); // Open image modal with image source
            }
        });
    });
});
