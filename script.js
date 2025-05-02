document.addEventListener('DOMContentLoaded', () => {
    // --- Event Handling ---
    const clickButton = document.getElementById('clickButton');
    const hoverArea = document.getElementById('hoverArea');
    const keypressInput = document.getElementById('keypressInput');
    const keypressOutput = document.getElementById('keypressOutput');
    const doubleClickButton = document.getElementById('doubleClickButton');
    const doubleClickMessage = document.getElementById('doubleClickMessage');
    const longPressArea = document.getElementById('longPressArea');
    const longPressMessage = document.getElementById('longPressMessage');

    clickButton.addEventListener('click', () => {
        alert('Button Clicked!');
    });

    hoverArea.addEventListener('mouseover', () => {
        hoverArea.style.backgroundColor = '#ffb300';
        hoverArea.style.color = 'white';
    });

    hoverArea.addEventListener('mouseout', () => {
        hoverArea.style.backgroundColor = '#ffe0b2';
        hoverArea.style.color = '#333';
    });

    keypressInput.addEventListener('keypress', (event) => {
        keypressOutput.innerHTML = `You typed: <span class="math-inline">${event.key}</span>`;
    });

    doubleClickButton.addEventListener('dblclick', () => {
        doubleClickMessage.classList.remove('hidden');
        setTimeout(() => {
            doubleClickMessage.classList.add('hidden');
        }, 2000);
    });

    let longPressTimer;
    longPressArea.addEventListener('mousedown', () => {
        longPressTimer = setTimeout(() => {
            longPressMessage.classList.remove('hidden');
            setTimeout(() => {
                longPressMessage.classList.add('hidden');
            }, 2000);
        }, 1500); // Adjust time for long press (in milliseconds)
    });

    longPressArea.addEventListener('mouseup', () => {
        clearTimeout(longPressTimer);
    });

    longPressArea.addEventListener('mouseout', () => {
        clearTimeout(longPressTimer);
    });

    // --- Interactive Elements ---
    const changeTextButton = document.getElementById('changeTextButton');
    const changingText = document.getElementById('changingText');
    let isOriginalText = true;
    changeTextButton.addEventListener('click', () => {
        if (isOriginalText) {
            changingText.textContent = 'The text has changed!';
            isOriginalText = false;
        } else {
            changingText.textContent = 'This is the initial text.';
            isOriginalText = true;
        }
    });

    const changeColorButton = document.getElementById('changeColorButton');
    const coloredDiv = document.getElementById('coloredDiv');
    let isBlue = true;
    changeColorButton.addEventListener('click', () => {
        if (isBlue) {
            coloredDiv.style.backgroundColor = 'lightcoral';
            isBlue = false;
        } else {
            coloredDiv.style.backgroundColor = 'lightblue';
            isBlue = true;
        }
    });

    const galleryImages = [
        "https://via.placeholder.com/300/FFC0CB/000000?Text=Image%201",
        "https://via.placeholder.com/300/ADD8E6/000000?Text=Image%202",
        "https://via.placeholder.com/300/90EE90/000000?Text=Image%203"
    ];
    const galleryImageElement = document.getElementById('galleryImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentImageIndex = 0;

    function updateGallery() {
        galleryImageElement.src = galleryImages[currentImageIndex];
    }

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGallery();
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateGallery();
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    const animateMe = document.getElementById('animateMe');
    const startAnimationButton = document.getElementById('startAnimation');
    startAnimationButton.addEventListener('click', () => {
        animateMe.classList.toggle('animate');
    });

    // --- Form Validation ---
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formMessage = document.getElementById('formMessage');

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPasswordValid) {
            formMessage.textContent = 'Form submitted successfully!';
            formMessage.className = 'success';
        } else {
            formMessage.textContent = 'Please fix the errors above.';
            formMessage.className = 'error';
        }
    });
});