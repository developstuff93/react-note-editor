import React from "react";

export default function DeleteBtnIcon() {
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle cx="34" cy="31" r="31" fill="#1E1E1E" />
        <circle cx="34" cy="31" r="31" fill="white" fill-opacity="0.9" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.8571 17.6126L47.3957 16.1513L34 29.547L20.6043 16.1513L19.1429 17.6127L32.5386 31.0084L19.1429 44.4041L20.6043 45.8655L34 32.4698L47.3957 45.8655L48.8571 44.4041L35.4613 31.0084L48.8571 17.6126Z"
        fill="#1E1E1E"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0.244444"
          y="0"
          width="67.5111"
          height="67.5111"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.75556" />
          <feGaussianBlur stdDeviation="1.37778" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
