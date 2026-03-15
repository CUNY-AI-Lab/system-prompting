function switchTab(evt, tabName) {
  var tabContents = evt.target.parentElement.parentElement.querySelectorAll('.tab-content');
  tabContents.forEach(function(content) { content.classList.remove('active'); });
  var tabButtons = evt.target.parentElement.querySelectorAll('.tab-button');
  tabButtons.forEach(function(button) { button.classList.remove('active'); });
  document.getElementById(tabName).classList.add('active');
  evt.target.classList.add('active');
}
window.switchTab = switchTab;
