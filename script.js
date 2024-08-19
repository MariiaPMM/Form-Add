'use strict';

function addCheckbox() {
	let labelValue = document.getElementById('checkboxValue').value;
	if (labelValue === '') return;
	let checkboxContainer = document.createElement('div');
	checkboxContainer.className = 'checkbox-container';
	let newCheckbox = document.createElement('input');
	newCheckbox.type = 'checkbox';
	newCheckbox.id = `checkbox-${Date.now()}`;
	newCheckbox.name = 'options';
	newCheckbox.value = labelValue;
	let newLabel = document.createElement('label');
	newLabel.htmlFor = newCheckbox.id;
	newLabel.textContent = labelValue;

	let removeButton = document.createElement('button');
	removeButton.textContent = '✖';
	removeButton.type = 'button';
	removeButton.onclick = function () {
		checkboxContainer.remove();
	};

	checkboxContainer.appendChild(newCheckbox);
	checkboxContainer.appendChild(newLabel);
	checkboxContainer.appendChild(removeButton);

	let container = document.getElementById('checkboxesContainer');
	container.appendChild(checkboxContainer);

	document.getElementById('checkboxValue').value = '';
}
