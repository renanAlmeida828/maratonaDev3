document.querySelector('#queroAjudarToggle').addEventListener("click", function () {
  document.querySelector('.form').classList.toggle('hide')
});

function tooltipShow (){
  document.querySelector("#formTooltip").classList.remove("tooltipHide");
}

function tooltipHide (){
  document.querySelector("#formTooltip").classList.add("tooltipHide");
}

document.querySelector('#queroAjudarToggle').addEventListener("mouseover", tooltipShow);
document.querySelector('#queroAjudarToggle').addEventListener("mouseout", tooltipHide);



