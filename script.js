function toggleSection(header) {
  const section = header.nextElementSibling;
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}
