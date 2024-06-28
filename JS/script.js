document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.work-items a');
    const projectInfoDiv = document.getElementById('project-info');

    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const info = link.getAttribute('data-info');
            projectInfoDiv.innerHTML = info;
            projectInfoDiv.classList.add('show');

            // Hide the info after 3 seconds
            setTimeout(() => {
                projectInfoDiv.classList.remove('show');
            }, 3000);
            
        });
    });
});
