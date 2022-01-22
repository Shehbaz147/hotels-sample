import React from "react";
import { palette } from "src/components/foundation/palette";

const PotsAndPansIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  stroke,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6337 18.7306H5.32753C4.92624 18.7306 4.54138 18.5712 4.25762 18.2874C3.97387 18.0037 3.81445 17.6188 3.81445 17.2175V9.92139H17.1468V15.8768"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9442 9.92158H2.96422C2.86972 9.92158 2.77615 9.90288 2.68891 9.86655C2.60167 9.83023 2.52249 9.777 2.45591 9.70992C2.38934 9.64285 2.3367 9.56327 2.30103 9.47576C2.26536 9.38824 2.24736 9.29454 2.24807 9.20004V9.20004C2.24807 9.0101 2.32352 8.82795 2.45783 8.69364C2.59213 8.55934 2.77429 8.48389 2.96422 8.48389H17.9227C18.1122 8.4853 18.2935 8.5612 18.4275 8.6952C18.5615 8.8292 18.6374 9.01054 18.6388 9.20004V9.20004C18.639 9.38683 18.5667 9.56639 18.4371 9.70095C18.3076 9.83552 18.1309 9.91461 17.9442 9.92158V9.92158Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4379 6.22754H10.7341C12.6342 6.24735 14.511 6.64835 16.2533 7.40677C16.4756 7.50472 16.672 7.65299 16.8272 7.83989C16.9823 8.02679 17.0918 8.24719 17.1472 8.48369H4.04102C4.09635 8.24719 4.2059 8.02679 4.36102 7.83989C4.51615 7.65299 4.7126 7.50472 4.93486 7.40677C6.67301 6.65308 8.54358 6.25224 10.4379 6.22754V6.22754Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8217 6.18443H9.19402C9.07264 6.18443 8.95622 6.13621 8.87038 6.05037C8.78455 5.96454 8.73633 5.84812 8.73633 5.72673C8.73633 5.60535 8.78455 5.48893 8.87038 5.4031C8.95622 5.31726 9.07264 5.26904 9.19402 5.26904H11.8217C11.9431 5.26904 12.0595 5.31726 12.1453 5.4031C12.2312 5.48893 12.2794 5.60535 12.2794 5.72673C12.2794 5.84812 12.2312 5.96454 12.1453 6.05037C12.0595 6.13621 11.9431 6.18443 11.8217 6.18443Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.26947 18.731H19.5002C19.6663 18.7313 19.8294 18.687 19.9724 18.6027C20.1154 18.5184 20.2332 18.3972 20.3133 18.2517L21.5518 16.001H7.35254L8.42946 18.2087C8.50527 18.3666 8.62458 18.4997 8.77337 18.5922C8.92216 18.6847 9.09427 18.7329 9.26947 18.731V18.731Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5459 16.0063H26.6882"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.7254 15.6401H26.6885V16.3724H29.7254V15.6401Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PotsAndPansIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default PotsAndPansIcon;
