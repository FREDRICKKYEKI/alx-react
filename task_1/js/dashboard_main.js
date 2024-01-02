// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  // Add elements to the page
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Counter
  let count = 0;
  const updateCounter = _.debounce(() => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }, 500);

  // Click event on the button
  $('button').on('click', function () {
    updateCounter();
  });
});
