import '@babel/polyfill';
import { login, logout } from './login';
import { displayMap } from './leaflet';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';

// Maps
const maps = document.getElementById('map');
if (maps) {
  const locations = JSON.parse(maps.dataset.locations);
  displayMap(locations);
}

// Login form
const loginForm = document.querySelector('.form--login');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    e.preventDefault();
    login(email, password);
  });
}

// Logout
let logoutbtn = document.querySelector('.nav__el--logout');
if (logoutbtn)
  logoutbtn.addEventListener('click', (e) => {
    logout();
  });

// User data form in profile
const userDataForm = document.querySelector('.form-user-data');
if (userDataForm) {
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name')?.value);
    form.append('email', document.getElementById('email')?.value);
    form.append('photo', document.getElementById('photo')?.files[0]);
    updateSettings(form, 'data');
  });
}

// Password update
const userPasswordForm = document.querySelector('.form-user-password');
if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const password = document.getElementById('password')?.value;
    const passwordCurrent = document.getElementById('password-current')?.value;
    const passwordConfirm = document.getElementById('password-confirm')?.value;
    // console.log(password, passwordConfirm, passwordCurrent);
    await updateSettings(
      {
        passwordCurrent,
        password,
        passwordConfirm,
      },
      'password'
    );
    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password').value = '';
    document.getElementById('password-current').value = '';
    document.getElementById('password-confirm').value = '';
  });
}

// book tour
const bookBtn = document.getElementById('book-tour');
if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });
}
