const img = document.querySelector('#feature-img');
const boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; ++i) {
  const box = boxes[i];

  box.addEventListener('dragstart', (e) => {
    console.log('dragstart');
    setTimeout(() => {
      img.style.display = 'none';
    }, 0)
  });

  box.addEventListener('dragenter', (e) => {
    console.log(e.target.getAttribute('id'), 'dragenter');
    e.preventDefault();
    e.target.className += ' dashed'
  });

  box.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  box.addEventListener('dragleave', (e) => {
    console.log(e.target.getAttribute('id'), 'dragleave');
    e.target.classList.remove('dashed');
  });

  box.addEventListener('drop', (e) => {
    console.log('drop');
    e.target.appendChild(img);
  });

  box.addEventListener('dragend', (e) => {
    console.log('dragend');
    img.style.display = 'block';
  });
}
