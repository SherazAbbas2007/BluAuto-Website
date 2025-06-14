
import React from "react";

interface AiNurtureSystemsIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const AiNurtureSystemsIcon: React.FC<AiNurtureSystemsIconProps> = ({
  size = 55,
  className = "",
  color = "currentColor",
}) => (
  <svg
    className={className}
    style={{ width: size, height: size, fill: color, verticalAlign: "middle" }}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0 C9.2748186 5.40788796 17.17495284 13.89823925 20.06985593 24.37092364 C20.87259299 28.32862018 20.77338116 32.30133245 20.75961304 36.32548523 C20.76414415 37.30305198 20.76867526 38.28061873 20.77334368 39.28780872 ... (SVG PATH DATA TRUNCATED FOR BREVITY) ..." fill={color} transform="translate(491.5078125,38.546875)" />
    <path d="M0 0 C8.20955949 5.13282368 13.15061581 10.67902574 16.6875 19.6875 C18.64455372 24.36400667 18.64455372 24.36400667 22.47265625 27.41015625 ... (SVG PATH DATA TRUNCATED FOR BREVITY) ..." fill={color} transform="translate(56,40)" />
    <path d="M0 0 C3.66944815 3.00099539 6.96937735 6.29600157 10.25927734 9.70410156 C10.99662109 10.41050781 11.73396484 11.11691406 12.49365234 11.84472656 ... (SVG PATH DATA TRUNCATED FOR BREVITY) ..." fill={color} transform="translate(300.74072265625,13.2958984375)" />
  </svg>
);

export default AiNurtureSystemsIcon;
