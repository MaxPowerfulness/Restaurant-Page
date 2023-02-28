function homeInitialize () {
    const content = document.getElementById('content');

    const name = document.createElement('h1');
    name.textContent = "Big Al's Panini Post";
    content.appendChild(name);

    const img = document.createElement('img');
    img.src = '../Chicken_Panini_Web_1.jpg';
    content.appendChild(img);

    const storyContainer = document.createElement('div');
    storyContainer.classList.add('container');
    const story = document.createElement('p');
    story.textContent = "Big Al was born in 1980 in the Panini capital of the world, Lincoln Nebraska, Panini in hand. From a young age, he would make Paninis everyday. Now, over 30 years later, he still does. Wow!";
    content.appendChild(storyContainer);
    storyContainer.appendChild(story);
    
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('container');
    const hourHeader = document.createElement('h2');
    hourHeader.textContent = "Hours";
    const hours = document.createElement('p');
    hours.innerHTML = "Sunday: Closed <br> Monday: 10am - 8pm <br> Tuesday: 10am - 8pm <br> Wednesday: 10am - 8pm <br> Thursday: 10am - 8pm <br> Friday: 10am - 10pm <br> Saturday: 11am - 10pm"
    content.appendChild(hoursContainer);
    hoursContainer.appendChild(hourHeader);
    hoursContainer.appendChild(hours);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('container');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = "Location";
    const location = document.createElement('p');
    location.textContent = "123 Location Drive, Seattle WA";
    content.appendChild(locationContainer);
    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(location);
};

export {homeInitialize};
