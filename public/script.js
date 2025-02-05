  // Track form start time
  let startTime = Date.now();

  // Handle form submission inside an async function
  async function handleSubmit(event) {
    event.preventDefault();

    // Get the values from the form
    const link = document.getElementById('campaign-link').value;
    const progress = parseFloat(document.getElementById('donation-progress').value);

    // Honeypot field check
    const honeypot = document.getElementById('honeypot').value;
    if (honeypot) {
      alert('Bot detected! Honeypot field was filled.');
      return; // Don't submit the form
    }

    // Time-based validation
    let endTime = Date.now();
    let timeTaken = endTime - startTime; // Time in milliseconds
    if (timeTaken < 2000) { // If less than 2 seconds, likely a bot
      alert('Bot detected! Form submitted too quickly.');
      return; // Don't submit the form
    }

    // Replace with your Google Sheets URL
    const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSezeiysXf96JrAdStDM33nenr0ywZ77RxtxGleo2-IyBcdTyigyiyh04zArZndI8maUL9wqjqdDKFn/pub?output=csv';

    // Fetch data from Google Sheets CSV
    async function fetchCSV() {
      const response = await fetch(sheetURL);
      const data = await response.text();
      return parseCSV(data);
    }

    // Parse CSV data into an array of objects
    function parseCSV(csvText) {
      const rows = csvText.split("\n").map(row => row.split(","));
      const headers = rows[0];
      return rows.slice(1).map(row => {
        let entry = {};
        row.forEach((value, index) => {
          entry[headers[index]] = value.trim();
        });
        return entry;
      });
    }

    // Fetch the current CSV data
    const data = await fetchCSV();

    // Check if the link already exists
    const existingLink = data.find(entry => entry['Donation Link'] === link);
    const statusMessage = document.getElementById('status-message');

    if (existingLink) {
      statusMessage.textContent = "Your link is already up on the donor page.";
      statusMessage.style.color = 'white';
    } else {
      // Create new entry and display on donor page
      const newEntry = { 'Donation Link': link, 'Donation Progress': progress };
      const donorPageLink = `donorpage.html`; // Redirect to donor page to display the new entry

      // You can add more logic here to dynamically update the donor page
      statusMessage.textContent = `Your campaign has been successfully submitted! Check the donor page for updates.`;
      statusMessage.style.color = 'white';

      // Reset form
      document.getElementById('campaign-link').value = '';
      document.getElementById('donation-progress').value = '';
    }
  }

  // Add event listener to form
  document.getElementById('submit-form').addEventListener('submit', handleSubmit);


document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Welcome to Solidarity Network!",
    "Support Palestine, support justice.",
    "Click around to learn more!",
    "Together, we make a difference.",
    "Boycott, divest, and stand for Palestine!",
  ];

  const speechBubble = document.getElementById("speech-bubble");

  setInterval(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    speechBubble.textContent = randomMessage;
  }, 5000);
});
