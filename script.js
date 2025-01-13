window.addEventListener(
  "scroll",

  function () {
    const boxes = document.querySelectorAll(".scroll-box");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    boxes.forEach((box, index) => {
      const boxOffset = box.offsetTop;
      const boxHeight = box.offsetHeight;
      const distanceFromCenter = Math.abs(
        scrollPosition + windowHeight / 2 - (boxOffset + boxHeight / 2)
      );

      const maxDistance = windowHeight / 2;
      const scale = Math.max(1 - distanceFromCenter / maxDistance, 0.5);
      const opacity = Math.min(scale + 0.5, 1);

      box.style.transform = `scale(${scale})`;
      box.style.opacity = opacity;
    });
  }
);
