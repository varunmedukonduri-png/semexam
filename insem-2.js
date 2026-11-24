
let currentPortfolioURL = null;

function uploadPortfolio() {

    const fileInput = document.getElementById("portfolioFile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select your portfolio PDF!");
        return;
    }

    if (file.type !== "application/pdf") {
        alert("Please upload a PDF file only!");
        return;
    }

    if (currentPortfolioURL) {
        URL.revokeObjectURL(currentPortfolioURL);
    }

    currentPortfolioURL = URL.createObjectURL(file);

    document.getElementById("fileName").innerText =
        "Selected: " + file.name;

    document.getElementById("portfolioPreview").innerHTML = `
        <h3>Portfolio Preview</h3>

        <iframe src="${currentPortfolioURL}"></iframe>

        <br>

        <a href="${currentPortfolioURL}"
           download="${file.name}"
           class="download-btn">
           Download Portfolio
        </a>
    `;

    alert("Portfolio loaded successfully!");
}
