
let makeChecked = function (el){
    el.classList.toggle('checked');
}

function CreateNewItem(inner){
    let item = document.createElement('div');
    item.classList.add('note__list-item')
    item.innerHTML = `<div class="note__list-checkbox" onclick="makeChecked(this)">
                        <span class="custom-check"><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.82771 0.195262C10.0574 0.455612 10.0574 0.877722 9.82771 1.13807L3.94536 7.80474C3.71564 8.06509 3.34319 8.06509 3.11347 7.80474L0.17229 4.4714C-0.05743 4.21105 -0.05743 3.78894 0.17229 3.5286C0.40201 3.26825 0.77446 3.26825 1.00418 3.5286L3.52941 6.39052L8.99582 0.195262C9.22554 -0.0650874 9.59799 -0.0650874 9.82771 0.195262Z" fill="white"/></svg>
                            </span>
                    </div>
                    <div class="note__inner">${inner}</div>`;
    return item;
}

function addItem(id){
    let list = document.getElementById('list');
    let inner = document.getElementById('input').value;
    if(inner.length != 0){
        let el = new CreateNewItem(inner);
        list.append(el)
        document.getElementById('listHeading').style.display = 'inline';
        document.getElementById('input').value = '';
    }
    else alert('enter something')
}