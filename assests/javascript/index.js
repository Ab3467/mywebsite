function toggleAchievements() {
    var achievementsContainer = document.getElementById('achievements');
    var arrowIcon = document.querySelector('.achievements-title::after');

    if (achievementsContainer.classList.contains('show')) {
        achievementsContainer.classList.remove('show');
        arrowIcon.style.transform = 'rotate(200deg)';
    } else {
        achievementsContainer.classList.add('show');
        arrowIcon.style.transform = 'rotate(180deg)';
    }
}

// function toggleAchievements1() {
//     var achievementsContainer = document.getElementById('Features');
//     var arrowIcon = document.querySelector('.achievements-title1::after');

//     if (achievementsContainer.classList.contains('show')) {
//         achievementsContainer.classList.remove('show');
//         arrowIcon.style.transform = 'rotate(200deg)';
//     } else {
//         achievementsContainer.classList.add('show');
//         arrowIcon.style.transform = 'rotate(180deg)';
//     }
// }


// function toggleAchievements1() {
//     var achievementsContainer = document.getElementById('Success Points');
//     var arrowIcon = document.querySelector('.achievements-title2::after');

//     if (achievementsContainer.classList.contains('show')) {
//         achievementsContainer.classList.remove('show');
//         arrowIcon.style.transform = 'rotate(200deg)';
//     } else {
//         achievementsContainer.classList.add('show');
//         arrowIcon.style.transform = 'rotate(180deg)';
//     }
// }