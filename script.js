document.querySelectorAll('.expandable').forEach(item => {
    item.addEventListener('click', event => {
        // Retire la classe 'active' de tous les éléments
        document.querySelectorAll('.expandable').forEach(i => {
            i.classList.remove('active');
        });

        // Ajoute la classe 'active' à l'élément cliqué
        item.classList.add('active');

        // Affiche ou cache la description correspondante
        const targetId = item.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement.style.display === 'block') {
            targetElement.style.display = 'none';
        } else {
            targetElement.style.display = 'block';
        }
        
    });
});
