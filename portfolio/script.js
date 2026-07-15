(() => {
  const themes = ["evidence", "dossier", "signal"];
  const kickers = {
    evidence: "Evidence Terminal / Portfolio 2026",
    dossier: "Executive Dossier / 2026",
    signal: "Signal Lab / Portfolio 2026",
  };
  const themeColors = {
    evidence: "#070b14",
    dossier: "#f4efe5",
    signal: "#032d25",
  };
  const root = document.querySelector(".portfolio");
  const buttons = Array.from(document.querySelectorAll(".theme-options button"));
  const kicker = document.querySelector(".hero-kicker");
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  if (!root || buttons.length !== themes.length) return;

  function activate(theme) {
    const resolved = themes.includes(theme) ? theme : "evidence";
    root.setAttribute("data-theme", resolved);
    buttons.forEach((button, index) => {
      const active = themes[index] === resolved;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (kicker) kicker.textContent = kickers[resolved];
    if (themeMeta) themeMeta.setAttribute("content", themeColors[resolved]);
    try {
      window.localStorage.setItem("hasan-portfolio-theme", resolved);
    } catch {
      // The selected theme still works when storage is unavailable.
    }
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activate(themes[index]));
  });

  let savedTheme = "evidence";
  try {
    savedTheme = window.localStorage.getItem("hasan-portfolio-theme") || "evidence";
  } catch {
    // Keep the evidence theme as the privacy-safe default.
  }
  activate(savedTheme);
})();
