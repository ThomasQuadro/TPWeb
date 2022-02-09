const burger = document.querySelector('.burger')
const body = document.querySelector('body');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    body.classList.toggle('open')
})

/*----------------------------------------------------*/

function onClick(element) {
  document.getElementById("image-zoomer").src = element.src;
  document.getElementById("image").style.display = "flex";
}

/*----------------------------------------------------*/

function change() {
    var modelCbs = document.querySelectorAll(".grade input[type='checkbox']");
    var processorCbs = document.querySelectorAll(".attribut input[type='checkbox']");
    var filters = {
      models: getClassOfCheckedCheckboxes(modelCbs),
      processors: getClassOfCheckedCheckboxes(processorCbs)
    };
  
    filterResults(filters);
  }
  
  function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];
  
    if (checkboxes && checkboxes.length > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("rel"));
        }
      }
    }
  
    return classes;
  }
  
  function filterResults(filters) {
    var rElems = document.querySelectorAll(".perso a");
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];
  
      if (filters.models.length > 0) {
        var isHidden = true;
  
        for (var j = 0; j < filters.models.length; j++) {
          var filter = filters.models[j];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }
  
      if (filters.processors.length > 0) {
        var isHidden = true;
  
        for (var j = 0; j < filters.processors.length; j++) {
          var filter = filters.processors[j];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }
    }
  
    for (var i = 0; i < rElems.length; i++) {
      rElems[i].style.display = "flex";
    }
  
    if (hiddenElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < hiddenElems.length; i++) {
      hiddenElems[i].style.display = "none";
    }
  }