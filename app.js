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
    value: 0,
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
    value: 100,
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
    value: 100,
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

Object.keys(filters).forEach((filter) => {
  const { min, max, value, unit } = filter;
  filterContainer.appendChild(createFilter(filter, min, max, value, unit));
});
