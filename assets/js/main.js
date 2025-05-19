document.addEventListener('DOMContentLoaded', function () {
    // Accordion for Levels
    const levelHeaders = document.querySelectorAll('.level-header');
    levelHeaders.forEach(header => {
        header.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0px";
                content.style.paddingTop = "0px";
                content.style.paddingBottom = "0px";
            } else {
                content.style.maxHeight = content.scrollHeight + 40 + "px";
                content.style.paddingTop = "20px";
                content.style.paddingBottom = "20px";
            }
        });
    });

    // Accordion for Features
    const featureHeaders = document.querySelectorAll('.feature-header');
    featureHeaders.forEach(header => {
        header.addEventListener('click', function (event) {
            event.stopPropagation();
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            const parentLevelContent = this.closest('.level-content');

            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0px";
                content.style.paddingTop = "0px";
                content.style.paddingBottom = "0px";
            } else {
                content.style.maxHeight = content.scrollHeight + 30 + "px";
                content.style.paddingTop = "15px";
                content.style.paddingBottom = "15px";
            }

            // Adjust parent level content height if it's open
            if (parentLevelContent && parentLevelContent.classList.contains('active')) {
                setTimeout(() => {
                    parentLevelContent.style.maxHeight = parentLevelContent.scrollHeight + 40 + "px";
                }, 410);
            }
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.length > 1 && document.querySelector(targetId)) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (targetId === "#") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Auto-open first level for demonstration
    if (levelHeaders.length > 0) {
        const firstLevelHeader = levelHeaders[0];
        const firstLevelContent = firstLevelHeader.nextElementSibling;
        firstLevelHeader.classList.add('active');
        firstLevelContent.classList.add('active');
        firstLevelContent.style.maxHeight = firstLevelContent.scrollHeight + 40 + "px";
        firstLevelContent.style.paddingTop = "20px";
        firstLevelContent.style.paddingBottom = "20px";
    }
});
