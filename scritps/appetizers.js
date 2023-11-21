const Appetizers = () => {
  
    const appetizerContent = document.createElement('div');
    appetizerContent.setAttribute('class', 'container-flex');

    const appetizerHeader = document.createElement('h1');
    appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    appetizerHeader.innerHTML = 'APPETIZERS';
  
    const itemContent = document.createElement('div');
    itemContent.setAttribute('class', 'item-flex');

    const appetizerList = document.createElement('ul');
    appetizerList.setAttribute('class', 'appetizer-list');
  
    const appetizerItem = () => {
      const list = document.createElement('li');
      list.setAttribute('class', 'nav-item list-unstyled mx-2');
  
      const appetizer1 = document.createElement('h1');
      appetizer1.setAttribute('id', 'appetizer1');
      appetizer1.setAttribute('class', 'text-center');
      appetizer1.innerHTML = 'DEVILED EGGS';
      list.appendChild(appetizer1);
      const appetizerParagraph1 = document.createElement('p');
      appetizerParagraph1.setAttribute('class', 'my-3 pb-3');
      appetizerParagraph1.innerHTML = 'We use the most savory and addiciting recipe to create our unique deviled eggs!';
      list.appendChild(appetizerParagraph1);
  
      const appetizer2 = document.createElement('h1');
      appetizer2.setAttribute('id', 'appetizer2');
      appetizer2.setAttribute('class', 'text-center');
      appetizer2.innerHTML = 'GUACAMOLE';
      list.appendChild(appetizer2);
      const appetizerParagraph2 = document.createElement('p');
      appetizerParagraph2.setAttribute('class', 'my-3 pb-3');
      appetizerParagraph2.innerHTML = 'Used the most ripest of fruit, combined with the sweetest cream. Good for 2 people.';
      list.appendChild(appetizerParagraph2);
  
      const appetizer3 = document.createElement('h1');
      appetizer3.setAttribute('id', 'appetizer3');
      appetizer3.setAttribute('class', 'text-center');
      appetizer3.innerHTML = 'CROSTINI';
      list.appendChild(appetizer3);
      const appetizerParagraph3 = document.createElement('p');
      appetizerParagraph3.setAttribute('class', 'my-3 pb-3');
      appetizerParagraph3.innerHTML = 'Crisp, golden crostini. Served with a touch of butter and cheese.';
      list.appendChild(appetizerParagraph3);
  
      return list;
    };
  
    appetizerContent.appendChild(appetizerHeader);
    appetizerList.appendChild(appetizerItem())
    itemContent.appendChild(appetizerList)
    appetizerContent.appendChild(itemContent);
  
    return appetizerContent;
}

export default Appetizers;