$(document).ready(function () {
    const $imageBox = $('#image-box');
    const $images = $imageBox.find('img');
    let currentIndex = 0;

    if ($images.length > 1) {
        // Hide all images except the first one
        $images.not(':first').hide();

        setInterval(() => {
            const $currentImage = $images.eq(currentIndex);
            const nextIndex = (currentIndex + 1) % $images.length;
            const $nextImage = $images.eq(nextIndex);

            // Position next image to the right and slide it in
            $nextImage.css({ left: '100%' }).show();
            $currentImage.animate({ left: '-100%' }, 1000);
            $nextImage.animate({ left: '0' }, 1000, () => {
                $currentImage.hide().css({ left: '0' });
                currentIndex = nextIndex;
            });
        }, 3000); // Change image every 3 seconds
    }
});