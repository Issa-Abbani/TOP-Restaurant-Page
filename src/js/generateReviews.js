export const generateReviews = (() => {
  const main = document.querySelector('main');

  const loadMe = () => {
    main.innerHTML = ''; // clear main

    // Create reviews wrapper
    const reviewsWrapper = document.createElement('div');
    reviewsWrapper.classList.add('reviews-section');
    main.append(reviewsWrapper);

    // Tabs
    const tabsDiv = document.createElement('div');
    tabsDiv.classList.add('tabs');
    reviewsWrapper.append(tabsDiv);

    const submitTab = document.createElement('button');
    submitTab.classList.add('tab-btn', 'active-tab');
    submitTab.dataset.tab = 'reviews-form';
    submitTab.textContent = 'Submit Review';

    const viewTab = document.createElement('button');
    viewTab.classList.add('tab-btn');
    viewTab.dataset.tab = 'reviews-list';
    viewTab.textContent = 'View Reviews';

    tabsDiv.append(submitTab, viewTab);

    // Tab contents
    const formTab = document.createElement('div');
    formTab.id = 'reviews-form';
    formTab.classList.add('tab-content', 'active-tab');

    const listTab = document.createElement('div');
    listTab.id = 'reviews-list';
    listTab.classList.add('tab-content');
    listTab.innerHTML = '<p>No reviews yet.</p>';

    reviewsWrapper.append(formTab, listTab);

    // Create form dynamically
    const form = document.createElement('form');
    form.id = 'reviewForm';
    form.innerHTML = `
      <label for="name">Name:</label>
      <input type="text" id="name" required>

      <label for="rating">Rating:</label>
      <select id="rating" required>
        <option value="">Select</option>
        <option value="5">5 ⭐⭐⭐⭐⭐</option>
        <option value="4">4 ⭐⭐⭐⭐</option>
        <option value="3">3 ⭐⭐⭐</option>
        <option value="2">2 ⭐⭐</option>
        <option value="1">1 ⭐</option>
      </select>

      <label for="comment">Review:</label>
      <textarea id="comment" rows="4" required></textarea>

      <button type="submit">Submit</button>
    `;
    formTab.appendChild(form);

    // Tabs logic
    const tabButtons = tabsDiv.querySelectorAll('.tab-btn');
    const tabContents = reviewsWrapper.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active-tab'));
        tabContents.forEach(c => c.classList.remove('active-tab'));

        btn.classList.add('active-tab');
        document.getElementById(btn.dataset.tab).classList.add('active-tab');
      });
    });

    // Form submission logic
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      const rating = form.querySelector('#rating').value;
      const comment = form.querySelector('#comment').value.trim();

      if (!name || !rating || !comment) return;

      const reviewItem = document.createElement('div');
      reviewItem.classList.add('review-item');
      reviewItem.innerHTML = `
        <p><strong>${name}</strong> - ${rating} ⭐</p>
        <p>${comment}</p>
        <hr>
      `;

      // If "No reviews yet" exists, remove it
      const noReviews = listTab.querySelector('p');
      if (noReviews && noReviews.textContent === 'No reviews yet.') {
        noReviews.remove();
      }

      listTab.appendChild(reviewItem);

      // Switch to reviews tab
      viewTab.click();

      form.reset();
    });
  };

  return { loadMe };
})();
