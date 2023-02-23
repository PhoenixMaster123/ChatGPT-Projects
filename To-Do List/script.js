const newItem = document.getElementById('new-item');
const addBtn = document.getElementById('add-btn');
const itemList = document.getElementById('items');

addBtn.addEventListener('click', addItem);

function addItem() {
    // Add an animation to the new item
    const newItemAnimation = itemList.animate([
      { transform: 'scale(0)' },
      { transform: 'scale(1)' }
    ], { duration: 300, easing: 'ease-out' });
    
    const itemText = newItem.value;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    listItem.appendChild(checkbox);
    const itemSpan = document.createElement('span');
    itemSpan.innerText = itemText;
    listItem.appendChild(itemSpan);
    itemList.appendChild(listItem);
    newItem.value = '';
    
    // Add the animation to the new item
    newItemAnimation.onfinish = () => {
      listItem.classList.add('added');
    };
    
    checkbox.addEventListener('change', toggleItem);
  }
  
  function toggleItem() {
    const listItem = this.parentNode;
    // Add an animation to the completed item
    const toggleAnimation = listItem.animate([
      { transform: 'scale(1)', backgroundColor: '#f2f2f2' },
      { transform: 'scale(0.9)', backgroundColor: '#4CAF50' },
      { transform: 'scale(1)', backgroundColor: '#4CAF50' }
    ], { duration: 300, easing: 'ease-out' });
    
    listItem.classList.toggle('completed');
    
    // Add the animation to the completed item
    toggleAnimation.onfinish = () => {
      listItem.style.backgroundColor = listItem.classList.contains('completed') ? '#4CAF50' : '#f2f2f2';
    };
  }
  
