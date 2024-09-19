document.addEventListener('DOMContentLoaded', function() {
    // Function to add initial animation classes
    function addInitialAnimationClasses() {
        // Heading Animation
        const heading = document.querySelector('#main-heading');
        if (heading) heading.classList.add('heading-animate');

        // Product Image and Details Animation
        const productContainers = document.querySelectorAll('.photo-container');
        productContainers.forEach(container => {
            const img = container.querySelector('img');
            const text = container.querySelector('p');
            if (img) img.classList.add('img-animate');
            if (text) text.classList.add('text-animate');
        });

        // Additional Animations
        const textContainer = document.querySelector('#text-container');
        if (textContainer) textContainer.classList.add('text-animate');

        const signedText = document.querySelector('#signed-text');
        const collectionText = document.querySelector('#collection-text');
        if (signedText) signedText.classList.add('signed-text-animate');
        if (collectionText) collectionText.classList.add('collection-text-animate');

        const shopNowBtn = document.querySelector('#shop-now-btn');
        if (shopNowBtn) shopNowBtn.classList.add('shop-now-btn-animate');

        const signatureImg = document.querySelector('#signature-img');
        if (signatureImg) signatureImg.classList.add('signature-img-animate');

        const image1Container = document.querySelector('#image-1-container');
        const image2Container = document.querySelector('#image-2-container');
        if (image1Container) image1Container.classList.add('image-animate');
        if (image2Container) image2Container.classList.add('image-animate');

        const image1 = document.querySelector('#image-1');
        const image2 = document.querySelector('#image-2');
        if (image1) image1.classList.add('image-animate');
        if (image2) image2.classList.add('image-animate');
    }

    // Function to set up Intersection Observer
    function setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Elements to observe
        const elementsToObserve = [
            '#main-heading', '#sub-heading',
            '.card-img-top', '#image-1', '#image-2',
            '.card-body', '#shop-now-btn', '#signature-img',
            '#shop-title', '#collection-title', '#view-all-btn',
            '#logo-img', '#boss-collection-img', '#headwear-img', '#value-books-img',
            '#accessories-img', '#future-looks-bright-img', '#tops-img'
        ];

        elementsToObserve.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                if (element) observer.observe(element);
            });
        });
    }

    // Function to add specific animations
    function addSpecificAnimations() {
        // Add animation class to quotes icon
        const quotesIcon = document.querySelector('#quotes-icon');
        if (quotesIcon) {
            quotesIcon.classList.add('animate__animated', 'animate__zoomIn');
        }

        // Add animation class to text container
        const textContainer = document.querySelector('#text-container');
        if (textContainer) {
            textContainer.classList.add('animate__animated', 'animate__fadeInLeft');
        }

        // Add animation class to text lines
        const textLines = document.querySelectorAll('.text-line');
        textLines.forEach((line, index) => {
            line.classList.add('animate__animated', 'animate__slideInUp');
            line.style.animationDelay = `${index * 0.5}s`;
        });

        // Add animation class to main image
        const mainImage = document.querySelector('#main-image');
        if (mainImage) {
            mainImage.classList.add('animate__animated', 'animate__zoomIn');
        }
    }

    // Function to add animations to future bright section
    function addFutureBrightSectionAnimations() {
        const futureBrightSection = document.querySelector('#future-bright-section');
        if (futureBrightSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        futureBrightSection.classList.add('animate');
                        observer.unobserve(futureBrightSection);
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(futureBrightSection);
        }
    }

    // Initialize functions
    addInitialAnimationClasses();
    setupIntersectionObserver();
    addSpecificAnimations();
    addFutureBrightSectionAnimations();
});