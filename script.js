const btn = document.getElementById('complete-btn');

btn.addEventListener('click', () => {
  // 1. Hiding the button so you can't click it again
  btn.style.display = 'none';

  // 2. Changing the text of the header to show success
  document.querySelector('h1').innerHTML = "Onboarding Complete! ✅";
  
  // 3. Changing the background color 
  document.querySelector('header').style.backgroundColor = "#107c10";
  
  // 4. Adding a message to the screen
  const statusBox = document.querySelector('.card');
  statusBox.innerHTML += "<p style='color:green; font-weight:bold;'>Data synced with Azure Intune.</p>";
});