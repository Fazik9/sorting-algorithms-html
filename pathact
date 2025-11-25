
const controls = document.querySelector('#controls');

// Helper function to create a color button
function makeColorButton(color) {
  const btn = document.createElement('button');
  btn.id = color;
  btn.textContent = color;
  btn.setAttribute('type', 'button');
  btn.setAttribute('aria-pressed', 'false');
  return btn;
}

// Create color buttons
const colors = ['pink', 'red', 'yellow'];
const buttons = colors.map(makeColorButton);
buttons.forEach(btn => controls.appendChild(btn));

// Function to change background
function setBackground(color) {
  document.body.style.backgroundColor = color;
}

// Add click listeners
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    setBackground(btn.id);
    // Update pressed state
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  });
});

// Set default color
setBackground('pink');
buttons.find(b => b.id === 'pink').setAttribute('aria-pressed', 'true');
