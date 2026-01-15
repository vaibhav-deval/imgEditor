const filters = {
  Brightness: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  Contrast: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  Exposure: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  Saturation: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  HueRotaion: {
    min: 0,
    max: 360,
    value: 0,
    unit: "%",
  },
  Blur: {
    min: 0,
    max: 20,
    value: 0,
    unit: "px",
  },
  Grayscale: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
  Sepia: {
    min: 0,
    max: 200,
    value: 0,
    unit: "%",
  },
  Opacity: {
    min: 0,
    max: 100,
    value: 100,
    unit: "%",
  },
  Invert: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
};

const filterContainer = document.querySelector(".filters");

function createFilter(name, min, max, value, unit = "%") {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  const p = document.createElement("p");
  p.innerHTML = name;

  div.appendChild(p);
  div.appendChild(input);
  return div;
}

Object.keys(filters).forEach((key) => {
  const { min, max, value, unit } = filters[key];
  const filterElem = createFilter(key, min, max, value, unit);
  filterContainer.appendChild(filterElem);
});

const placeHolder = document.querySelector(".placeHolder");
const selectImg = document.querySelector("#selectImg");
const imgContainer = document.querySelector(".imgContainer");
const canvasCTX = imgContainer.getContext("2d");

selectImg.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const img = new Image();
  img.src = URL.createObjectURL(file);
  imgContainer.style.display="block"

  img.onload = () => {
    imgContainer.width = img.width;
    imgContainer.height = img.height;
    canvasCTX.drawImage(img, 0, 0);
    placeHolder.style.display = "none";
  };
});
