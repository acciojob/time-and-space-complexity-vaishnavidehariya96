// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  console.log("JavaScript file linked successfully!");

  // Create a small interactive message
  const infoBtn = document.createElement("button");
  infoBtn.textContent = "Show Extra Info";
  infoBtn.style.padding = "10px 20px";
  infoBtn.style.backgroundColor = "#004aad";
  infoBtn.style.color = "white";
  infoBtn.style.border = "none";
  infoBtn.style.borderRadius = "8px";
  infoBtn.style.cursor = "pointer";
  infoBtn.style.display = "block";
  infoBtn.style.margin = "20px auto";

  document.body.appendChild(infoBtn);

  // Create hidden paragraph
  const extraInfo = document.createElement("p");
  extraInfo.textContent = "Time and Space Complexity help measure how scalable and efficient an algorithm is.";
  extraInfo.style.display = "none";
  extraInfo.style.width = "80%";
  extraInfo.style.margin = "10px auto";
  extraInfo.style.padding = "10px 20px";
  extraInfo.style.borderLeft = "5px solid #004aad";
  extraInfo.style.backgroundColor = "#f9fafb";
  extraInfo.style.borderRadius = "8px";

  document.body.appendChild(extraInfo);

  // Toggle visibility on button click
  infoBtn.addEventListener("click", function () {
    if (extraInfo.style.display === "none") {
      extraInfo.style.display = "block";
      infoBtn.textContent = "Hide Extra Info";
    } else {
      extraInfo.style.display = "none";
      infoBtn.textContent = "Show Extra Info";
    }
  });
});