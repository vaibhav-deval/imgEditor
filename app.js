/* =========================
   FILTER CONFIGURATION
========================= */
let filters = {
  Brightness: { min: 0, max: 200, value: 100, unit: "%" },
  Contrast: { min: 0, max: 200, value: 100, unit: "%" },
  Saturation: { min: 0, max: 200, value: 100, unit: "%" },
  Hue: { min: 0, max: 360, value: 0, unit: "deg" },
  Blur: { min: 0, max: 20, value: 0, unit: "px" },
  Grayscale: { min: 0, max: 100, value: 0, unit: "%" },
  Sepia: { min: 0, max: 200, value: 0, unit: "%" },
  Opacity: { min: 0, max: 100, value: 100, unit: "%" },
  Invert: { min: 0, max: 100, value: 0, unit: "%" },
};

/* =========================
   PRESETS CONFIGURATION
========================= */
const presets = {
  Normal: {
    Brightness: 100,
    Contrast: 100,
    Saturation: 100,
    Hue: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
  Instagram: {
    Brightness: 110,
    Contrast: 120,
    Saturation: 130,
    Hue: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 10,
    Opacity: 100,
    Invert: 0,
  },
  SnapchatGlow: {
    Brightness: 120,
    Contrast: 110,
    Saturation: 140,
    Hue: 10,
    Blur: 1,
    Grayscale: 0,
    Sepia: 5,
    Opacity: 100,
    Invert: 0,
  },
  Cinematic: {
    Brightness: 95,
    Contrast: 140,
    Saturation: 90,
    Hue: 200,
    Blur: 0,
    Grayscale: 0,
    Sepia: 10,
    Opacity: 100,
    Invert: 0,
  },
  DarkMoody: {
    Brightness: 85,
    Contrast: 150,
    Saturation: 80,
    Hue: 250,
    Blur: 0,
    Grayscale: 0,
    Sepia: 5,
    Opacity: 100,
    Invert: 0,
  },
  Vintage: {
    Brightness: 105,
    Contrast: 90,
    Saturation: 70,
    Hue: 30,
    Blur: 0,
    Grayscale: 10,
    Sepia: 60,
    Opacity: 100,
    Invert: 0,
  },
  GoldenHour: {
    Brightness: 120,
    Contrast: 110,
    Saturation: 150,
    Hue: 25,
    Blur: 0,
    Grayscale: 0,
    Sepia: 35,
    Opacity: 100,
    Invert: 0,
  },
  SoftSkin: {
    Brightness: 115,
    Contrast: 95,
    Saturation: 105,
    Hue: 5,
    Blur: 1,
    Grayscale: 0,
    Sepia: 5,
    Opacity: 100,
    Invert: 0,
  },

  MilkTea: {
    Brightness: 110,
    Contrast: 90,
    Saturation: 80,
    Hue: 20,
    Blur: 0,
    Grayscale: 0,
    Sepia: 30,
    Opacity: 100,
    Invert: 0,
  },

  BrownAesthetic: {
    Brightness: 105,
    Contrast: 110,
    Saturation: 75,
    Hue: 30,
    Blur: 0,
    Grayscale: 0,
    Sepia: 50,
    Opacity: 100,
    Invert: 0,
  },

  MoodyBlue: {
    Brightness: 90,
    Contrast: 135,
    Saturation: 85,
    Hue: 210,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },

  Peachy: {
    Brightness: 120,
    Contrast: 100,
    Saturation: 140,
    Hue: 15,
    Blur: 0,
    Grayscale: 0,
    Sepia: 20,
    Opacity: 100,
    Invert: 0,
  },

  TravelVlog: {
    Brightness: 110,
    Contrast: 130,
    Saturation: 150,
    Hue: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },

  DarkFade: {
    Brightness: 88,
    Contrast: 145,
    Saturation: 70,
    Hue: 260,
    Blur: 0,
    Grayscale: 0,
    Sepia: 10,
    Opacity: 100,
    Invert: 0,
  },

  PinkDream: {
    Brightness: 125,
    Contrast: 95,
    Saturation: 135,
    Hue: 330,
    Blur: 1,
    Grayscale: 0,
    Sepia: 10,
    Opacity: 100,
    Invert: 0,
  },

  HighDrama: {
    Brightness: 95,
    Contrast: 180,
    Saturation: 120,
    Hue: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },

  StreetLook: {
    Brightness: 100,
    Contrast: 150,
    Saturation: 90,
    Hue: 10,
    Blur: 0,
    Grayscale: 10,
    Sepia: 15,
    Opacity: 100,
    Invert: 0,
  },

  Pastel: {
    Brightness: 130,
    Contrast: 80,
    Saturation: 110,
    Hue: 0,
    Blur: 1,
    Grayscale: 0,
    Sepia: 5,
    Opacity: 100,
    Invert: 0,
  },

  NightLife: {
    Brightness: 90,
    Contrast: 170,
    Saturation: 160,
    Hue: 290,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },

  FilmDust: {
    Brightness: 100,
    Contrast: 95,
    Saturation: 85,
    Hue: 25,
    Blur: 1,
    Grayscale: 10,
    Sepia: 40,
    Opacity: 100,
    Invert: 0,
  },

  Arctic: {
    Brightness: 105,
    Contrast: 120,
    Saturation: 85,
    Hue: 200,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },

  ComicPop: {
    Brightness: 115,
    Contrast: 190,
    Saturation: 180,
    Hue: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
};

/* =========================
   DOM REFERENCES
========================= */
const filterContainer = document.querySelector(".filters");
const presetContainer = document.querySelector(".Presets");
const selectImg = document.querySelector("#selectImg");
const selectImgContainer = document.querySelector(".selectImg");
const canvas = document.querySelector(".imgContainer");
const ctx = canvas.getContext("2d");
const resetBtn = document.querySelector("#resetBtn");
const downloadBtn = document.querySelector("#downloadBtn");

/* =========================
   IMAGE STATE
========================= */
let image = null;
let file = null;

/* =========================
   CREATE SINGLE FILTER SLIDER
========================= */
function createFilter(name, min, max, value) {
  const wrapper = document.createElement("div");
  wrapper.className = "filter";

  const label = document.createElement("p");
  label.textContent = name;

  const valueText = document.createElement("span");
  valueText.textContent = value + filters[name].unit;

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;

  // Update filter value on slider move
  input.addEventListener("input", (e) => {
    filters[name].value = e.target.value;
    valueText.textContent = e.target.value + filters[name].unit;
    applyFilter();
  });

  wrapper.append(label, valueText, input);
  return wrapper;
}

/* =========================
   RENDER ALL FILTER SLIDERS
========================= */
function createFilterElem() {
  filterContainer.innerHTML = "";
  Object.keys(filters).forEach((key) => {
    const { min, max, value } = filters[key];
    filterContainer.appendChild(createFilter(key, min, max, value));
  });
}

createFilterElem();

/* =========================
   IMAGE SELECTION & DRAW
========================= */
selectImg.addEventListener("change", (e) => {
  file = e.target.files[0];
  if (!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;

    canvas.style.display = "block"; // IMPORTANT
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.filter = "none"; // reset any previous filter
    ctx.drawImage(img, 0, 0);

    selectImgContainer.style.display = "none";
  };
});

/* =========================
   APPLY FILTERS TO CANVAS
========================= */
function applyFilter() {
  if (!file) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.filter = `
    brightness(${filters.Brightness.value}${filters.Brightness.unit})
    contrast(${filters.Contrast.value}${filters.Contrast.unit})
    saturate(${filters.Saturation.value}${filters.Saturation.unit})
    hue-rotate(${filters.Hue.value}${filters.Hue.unit})
    blur(${filters.Blur.value}${filters.Blur.unit})
    grayscale(${filters.Grayscale.value}${filters.Grayscale.unit})
    sepia(${filters.Sepia.value}${filters.Sepia.unit})
    opacity(${filters.Opacity.value}${filters.Opacity.unit})
    invert(${filters.Invert.value}${filters.Invert.unit})
  `;

  ctx.drawImage(image, 0, 0);
}

/* =========================
   RESET FILTERS
========================= */
resetBtn.addEventListener("click", () => {
  Object.keys(filters).forEach((key) => {
    filters[key].value =
      key === "Brightness" || key === "Contrast" || key === "Saturation"
        ? 100
        : key === "Opacity"
        ? 100
        : 0;
  });

  document
    .querySelectorAll(".Presets button")
    .forEach((b) => b.classList.remove("active"));

  createFilterElem();
  applyFilter();
});

/* =========================
   DOWNLOAD IMAGE
========================= */
downloadBtn.addEventListener("click", () => {
  if (!file) return alert("Please select an image first");

  const link = document.createElement("a");
  link.download = "Edited_Image.jpg";
  link.href = canvas.toDataURL("image/jpeg", 1.0);
  link.click();
});

/* =========================
   PRESETS BUTTONS
========================= */
Object.keys(presets).forEach((name) => {
  const btn = document.createElement("button");
  btn.textContent = name;
  presetContainer.appendChild(btn);

  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".Presets button")
      .forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    Object.keys(presets[name]).forEach((filter) => {
      filters[filter].value = presets[name][filter];
    });

    createFilterElem();
    applyFilter();
  });
});
