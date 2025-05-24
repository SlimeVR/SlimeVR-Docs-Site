<style>
    .led {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-block;
    }

    .red {
      background-color: red;
      box-shadow: 0 0 5px red;
    }

    .blue {
      background-color: blue;
      box-shadow: 0 0 5px blue;
    }

    .green {
      background-color: green;
      box-shadow: 0 0 5px green;
    }

    /* General Animation Setup */
    @keyframes short-blink {
      0%, 90%, 100% { opacity: 0; }
      5%, 10%       { opacity: 1; }
    }

    @keyframes long-blink {
      0%, 90%, 100% { opacity: 0; }
      5%, 25%       { opacity: 1; }
    }

    @keyframes two-blinks {
      0%, 20%       { opacity: 1; }
      10%, 30%      { opacity: 0; }
      40%, 100%     { opacity: 0; }
    }

    @keyframes three-blinks {
      0%, 10%       { opacity: 1; }
      5%, 15%       { opacity: 0; }
      20%, 30%      { opacity: 1; }
      25%, 35%      { opacity: 0; }
      40%, 50%      { opacity: 1; }
      45%, 100%     { opacity: 0; }
    }

    @keyframes four-blinks {
      0%, 10%       { opacity: 1; }
      5%, 15%       { opacity: 0; }
      20%, 30%      { opacity: 1; }
      25%, 35%      { opacity: 0; }
      40%, 50%      { opacity: 1; }
      45%, 55%      { opacity: 0; }
      60%, 70%      { opacity: 1; }
      65%, 100%     { opacity: 0; }
    }

    @keyframes fade-on-off {
      0%, 100% { opacity: 0; }
      50%      { opacity: 1; }
    }

    @keyframes very-short-blink {
      0%, 95%, 100% { opacity: 0; }
      1%, 2%        { opacity: 1; }
    }

    @keyframes pulsing {
      0%, 100% { box-shadow: 0 0 5px red; opacity: 0.6; }
      50%      { box-shadow: 0 0 20px red; opacity: 1; }
    }

    /* Pattern Classes */
    .pairing           { animation: short-blink 1s infinite; }
    .low-battery       { animation: long-blink 1s infinite; }
    .error-2-blinks    { animation: two-blinks 5s infinite; }
    .error-3-blinks    { animation: three-blinks 5s infinite; }
    .error-4-blinks    { animation: four-blinks 5s infinite; }
    .sensor-error      { animation: two-blinks 2s infinite; }
    .connection-error  { animation: three-blinks 3s infinite; }
    .hardware-error    { animation: four-blinks 4s infinite; }
    .dfu               { animation: fade-on-off 2s infinite; }
    .normal-operation  { animation: very-short-blink 1s infinite; }
    .charging          { animation: pulsing 2s infinite; }
    .fully-charged     { opacity: 1; }
</style>

# Smol LED Codes

## Table Of Contents

- TOC
  {:toc}

## LED Codes

###  1 short blink per second - Pairing mode.

Blinking pattern animation: <span class="led red pairing"></span>

### 2 blinks every 5 seconds - Sensor error.

Blinking pattern animation: <span class="led red error-2-blinks"></span> 

### 3 blinks every 5 seconds - Connection error.

Blinking pattern animation: <span class="led red error-3-blinks"></span> 

### 4 blinks every 5 seconds - Hardware error.

Blinking pattern animation: <span class="led red error-4-blinks"></span> 

### Fade on and off - DFU mode.

Blinking pattern animation: <span class="led red dfu"></span> 

### Very short blink - Normal operation or wake on motion.

Blinking pattern animation: <span class="led red normal-operation"></span> 

### While plugged in: Pulsing - Charging.

Blinking pattern animation SuperMini: <span class="led blue pairing"></span>

Blinking pattern animation XIAO: <span class="led green pairing"></span> 

### While plugged in: Solid - Fully charged.

Blinking pattern animation SuperMini: <span class="led blue fully-charged"></span> 

Blinking pattern animation XIAO: <span class="led green fully-charged"></span> 