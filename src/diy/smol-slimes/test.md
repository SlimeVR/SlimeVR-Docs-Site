# test

<style>
  form {
    padding: 2rem;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  label,
  fieldset {
    display: block;
    margin-bottom: 1rem;
        -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  input[type="text"],
  input[type="email"],
  input[type="number"],
  select {
    width: 100%;
    padding: 0.6rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 0.4rem;
  }

  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.4rem;
    transform: scale(1.2);
  }

  fieldset {
    padding: 1rem;
    border-radius: 8px;
  }

  legend {
    font-weight: bold;
    padding: 0 0.5rem;
  }

  form label > input[type="checkbox"],
  form label > input[type="radio"] {
    margin-right: 0.5rem;
  }
</style>

<form id="schematicForm">
  <fieldset>
    <legend>Schematic:</legend>
    <label>
      <input type="checkbox" name="isStacked" /> Stacked schematic (The IMU sits
      on top of the SuperMini)
    </label>
  </fieldset>
  <fieldset>
    <legend>IMU's <a href="../imu-comparison.md">(IMU Comparison)</a></legend>
    <label>
      <input type="radio" name="IMU" value="ICM-45686" checked="checked" />
      ICM-45686
    </label>
    <label> <input type="radio" name="IMU" value="LSM6DSV" /> LSM6DSV </label>
    <label> <input type="radio" name="IMU" value="LSM6DSR" /> LSM6DSR </label>
  </fieldset>
  <fieldset>
    <legend>Communication protocols:</legend>
    <label>
      <input type="radio" name="Protocol" value="SPI" checked="checked" /> SPI
      (Less energy consumption, more performance. Not support yet magnetometer)
    </label>
    <label>
      <input type="radio" name="Protocol" value="I2C" /> I2C (Support
      magnetometer. May not be supported in future updates)
    </label>
  </fieldset>
  <fieldset>
    <legend>Extra options:</legend>
    <label>
      <input type="checkbox" name="HasUserButton" checked="checked" /> User
      Button (Programmable user button mainly used for deep sleep)
    </label>
    <label>
      <input type="checkbox" name="hasResetButton" /> Reset Button (This is not
      available on stacked smols)
    </label>
    <label>
      <input type="checkbox" name="hasAntenna" /> Antenna (Replace the antenna
      with a short wire to improve range)
    </label>
  </fieldset>
</form>

<div
  id="schema-canvas"
  class="chip"
  style="position: relative; width: 100%"
></div>

<script>
  const form = document.getElementById("schematicForm");

  function getFormState(form) {
    const formData = new FormData(form);
    const state = {};
    for (const [key, value] of formData.entries()) {
      state[key] = value;
    }

    // Manually add checkbox states (FormData only includes checked boxes)
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb) => {
      state[cb.name] = cb.checked;
    });

    return state;
  }

  function getImages(formState) {
    const bgs = [formState.isStacked ? "stacked-base.webp" : "pcb-base.webp"];

    switch (formState.IMU) {
      case "ICM-45686":
        bgs.push(formState.isStacked ? "stacked-ICM.webp" : "pcb-ICM.webp");
        break;
      case "LSM6DSV":
        bgs.push(formState.isStacked ? "stacked-DSV.webp" : "pcb-DSV.webp");
        break;
      case "LSM6DSR":
        bgs.push(formState.isStacked ? "stacked-DSR.webp" : "pcb-DSR.webp");
        break;
    }

    switch (formState.Protocol) {
      case "SPI":
        bgs.push(formState.isStacked ? "stacked-SPI.webp" : "pcb-SPI.webp");
        break;
      case "I2C":
        if (formState.isStacked) {
          bgs.push("stacked-I2C.webp");
        }
        break;
    }

    if (formState.HasUserButton) {
      bgs.push("user-button.webp");
    }

    if (formState.hasResetButton) {
      bgs.push("reset-button.webp");
    }

    if (formState.hasAntenna) {
      bgs.push("antenna.webp");
    }

    return bgs;
  }

  const canvas = document.getElementById("schema-canvas");
  canvas.style.paddingTop = (2425 / 2405) * 100 + "%";

  function updateCanvas() {
    const formState = getFormState(form);
    console.clear(); // optional: clears previous logs for clarity
    console.log("Form state:", formState);

    canvas.style.background = getImages(formState)
      .map(
        (bg) =>
          "url(../../diy/smol-slimes/assets/schematics/" +
          bg +
          ") 0 0/100% 100%"
      )
      .reverse()
      .join(",");
  }

  form.addEventListener("input", updateCanvas);
  form.addEventListener("change", updateCanvas);

  updateCanvas();
</script>
