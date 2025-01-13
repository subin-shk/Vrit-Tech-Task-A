<h1>Vrit Technology Task A</h1>
<br>
<h2>Setup Instruction</h2>
 1. Clone the Repository

Clone the repository to your local machine:

```git clone https://github.com/subin-shk/Vrit-Tech-Task-A.git```

2. Open the cloned repository with live server or simply click index.html from file browser.

<h2>Technology Used</h2>

- HTML5
- CSS
- Javascript

<h3>CSS</h3>

* Rationale:

  CSS was used to create a visually appealing scrollable layout using Flexbox for a series of .scroll-box elements within a .scroll-container. Each scroll box has a background color, rounded corners, and a subtle shadow effect, with a transition applied to scale and opacity for smooth visual effects when scrolling. The items inside each scroll box are styled with varying sizes and background colors, including circles and rectangles with rounded edges, to create a dynamic and engaging design. The layout ensures that the page is scrollable and responsive, with a background gradient that enhances the overall aesthetic.


<h3>Vanilla Javascript</h3>

* Rationale:

JavaScript code was used to add a scroll event listener to the window. As the user scrolls, it dynamically adjusts the scale and opacity of elements with the class .scroll-box based on their distance from the center of the viewport. Here's how it works:

- Event Listener: It listens for the scroll event, triggering every time the user scrolls.
- Scroll Calculation: It calculates the current scroll position (scrollPosition) and the height of the viewport (windowHeight).
- Iterating over Scroll Boxes: It loops through all .scroll-box elements.
boxOffset and boxHeight: These values give the position of the element relative to the top of the page and its height.
- Distance from Center: It calculates the absolute distance of the box's center from the center of the viewport.
- Scale & Opacity: The scale is calculated based on how far the box is from the center, with a lower scale when further away and a maximum scale of 1 when centered. Opacity is adjusted similarly to maintain a smooth transition.
- CSS Transformations: The scale and opacity values are then applied to each .scroll-box element via inline styles.
This approach creates a smooth parallax-like effect where the scroll boxes change size and fade as the user scrolls through the page.


<h2>Known limitations</h2>

- The component doesn't overlay over other components as shown in the task demo video.

<h2>Future Improvements</h2>

- Ensure smooth scrolling effect.
- Ensure that the layout is optimized for various screen sizes and devices (i.e. Responsiveness).

<h2>Demo:</h2>

https://github.com/user-attachments/assets/69b9c8c0-9215-4b0e-9392-2c0dffd403fa

<p>TIme Spent: 3.5 hours</p>



