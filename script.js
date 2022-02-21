const c = document.getElementById("c");
const img = document.getElementById("img");

c.addEventListener("mousemove", (z) => {
  const x = z.clientX - z.target.offsetLeft;
  const y = z.clientY - z.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = `scale(2)`;
});

c.addEventListener("mouseleave", () => {
  img.style.transformOrigin = `center center`;
  img.style.transform = `scale(1)`;
});
