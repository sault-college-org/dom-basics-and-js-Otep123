// PART 1
const Appetizers = () => {
  
    const appetizerContent = document.createElement('div');
    appetizerContent.setAttribute('class', 'container-flex');

    const appetizerHeader = document.createElement('h1');
    appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    appetizerHeader.innerHTML = 'APPETIZERS';

    const appetizerList = document.createElement('ul');
    appetizerList.setAttribute('class', 'appetizer-list')
  
    const appetizerItem = () => {
      const list = document.createElement('li');
      list.setAttribute('class', 'nav-item list-unstyled mx-2 appetizer-list-item');
  
      const appetizerColumn1 = document.createElement('div');
      appetizerColumn1.setAttribute('class', 'appetizer-item-column');
      const appetizer1 = document.createElement('h1');
      appetizer1.setAttribute('id', 'appetizer1');
      appetizer1.setAttribute('class', 'text-center');
      appetizer1.innerHTML = 'DEVILED EGGS';
      const appetizerParagraph1 = document.createElement('p');
      appetizerParagraph1.setAttribute('class', 'my-3 pb-3 appetizer-text');
      appetizerParagraph1.innerHTML = 'We use the most savory and addiciting recipe to create our unique deviled eggs!';

      appetizerColumn1.appendChild(appetizer1);
      appetizerColumn1.appendChild(appetizerParagraph1);
      list.appendChild(appetizerColumn1);
  
      const appetizerColumn2 = document.createElement('div');
      appetizerColumn2.setAttribute('class', 'appetizer-item-column');
      const appetizer2 = document.createElement('h1');
      appetizer2.setAttribute('id', 'appetizer2');
      appetizer2.setAttribute('class', 'text-center');
      appetizer2.innerHTML = 'GUACAMOLE';
      const appetizerParagraph2 = document.createElement('p');
      appetizerParagraph2.setAttribute('class', 'my-3 pb-3 appetizer-text');
      appetizerParagraph2.innerHTML = 'Used the most ripest of fruit, combined with the sweetest cream. Good for 2 people.';

      appetizerColumn2.appendChild(appetizer2);
      appetizerColumn2.appendChild(appetizerParagraph2);
      list.appendChild(appetizerColumn2);
  
      const appetizerColumn3 = document.createElement('div');
      appetizerColumn3.setAttribute('class', 'appetizer-item-column');
      const appetizer3 = document.createElement('h1');
      appetizer3.setAttribute('id', 'appetizer3');
      appetizer3.setAttribute('class', 'text-center');
      appetizer3.innerHTML = 'CROSTINI';
      list.appendChild(appetizer3);
      const appetizerParagraph3 = document.createElement('p');
      appetizerParagraph3.setAttribute('class', 'my-3 pb-3 appetizer-text');
      appetizerParagraph3.innerHTML = 'Crisp, golden crostini. Served with a touch of butter and cheese.';
      list.appendChild(appetizerParagraph3);

      appetizerColumn3.appendChild(appetizer3);
      appetizerColumn3.appendChild(appetizerParagraph3);
      list.appendChild(appetizerColumn3);
  
      return list;
    };
  
    appetizerContent.appendChild(appetizerHeader);
    appetizerList.appendChild(appetizerItem())
    appetizerContent.appendChild(appetizerList);
  
    return appetizerContent;
}

export default Appetizers;