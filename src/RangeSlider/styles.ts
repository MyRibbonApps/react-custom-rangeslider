type RangeSliderProps = {
  progressBg?: string
  trackBg?: string
  thumbBg?: string
  trackSize?: number
  thumbSize?: number
}

export default function generateStyles({
  progressBg = "black",
  trackBg = "purple",
  thumbBg = "#000",
  trackSize = 20,
  thumbSize = 20,
}: RangeSliderProps) {
  const style = `
  /* Default style for the element */
    input[type="range"]  {
         -webkit-appearance: none;
         -moz-appearance: none;
          appearance: none;
          width: 100%;
          margin: 0;
          padding: 0;
          --webkitProgressPercent: 0%;
    }
    input[type="range"]:focus  {
        outline: none;
     }


    /* The track in the range input */
    input[type="range"]::-webkit-slider-runnable-track {
        height: ${trackSize}px;
        background-image: linear-gradient(
         90deg,
         ${progressBg} var(--webkitProgressPercent),
         ${trackBg} var(--webkitProgressPercent)
        );
        border-radius: calc(${trackSize} / 2);
    }
    input[type="range"]::-moz-range-track {
        height: ${trackSize}px;
        background-color: ${trackBg};
        border-radius: calc(${trackSize} / 2);
    }
    input[type="range"]::-ms-track {
        height: ${trackSize}px;
        background-color: ${trackBg};
        border-radius: calc(${trackSize} / 2);
    }

    */ The thumb on the range input */
    input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
      appearance: none;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: ${thumbBg};
      width: ${thumbSize}px;
      height: ${thumbSize}px;
      border-radius: calc(${thumbSize}px / 2);
      border: 7px solid black;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
      cursor: pointer;
}
    input[type="range"]::-moz-range-thumb {
        -moz-appearance: none;
        appearance: none;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        background-color: ${thumbBg};
        border-radius: calc(${thumbSize}px / 2);
        border: 7px solid black;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
        cursor: pointer;
}
    input[type="range"]::-ms-thumb {
        -ms-appearance: none;
        appearance: none;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        background-color: ${thumbBg};
        border-radius: calc(${thumbSize}px / 2);
        border: 7px solid black;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
        cursor: pointer;
}

    /*Progress for firefox etc */
        input[type="range"]::-moz-range-progress {
            height: ${trackSize}px;
            background-color: ${progressBg};
            border-radius: calc(${trackSize}px / 2) 0 0 calc(${trackSize}px / 2);
}
        input[type="range"]::-ms-fill-lower {
            height: ${trackSize}px;
            background-color: ${progressBg};
            border-radius: calc(${trackSize}px / 2) 0 0 calc(${trackSize}px / 2);
}
    `
  return style
}
