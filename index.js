document.getElementById("download-btn").addEventListener("click", () => {
  const resume = document.querySelector("main");
  const opt = {
    margin: 1,
    filename: "sami-kalammallah-cv.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().from(resume).set(opt).save();
});
