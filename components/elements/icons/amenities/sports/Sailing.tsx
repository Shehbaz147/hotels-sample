import React from "react";
import { palette } from "src/components/foundation/palette";

const SailingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
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
        d="M2.38477 18.6387C2.9438 19.2499 3.72041 19.6174 4.54756 19.662C5.37471 19.7066 6.18633 19.4248 6.80784 18.8771C7.38527 19.3908 8.13117 19.6745 8.90399 19.6745C9.6768 19.6745 10.4227 19.3908 11.0001 18.8771C11.5776 19.3908 12.3235 19.6745 13.0963 19.6745C13.8691 19.6745 14.615 19.3908 15.1925 18.8771C15.7699 19.3908 16.5158 19.6745 17.2886 19.6745C18.0614 19.6745 18.8073 19.3908 19.3848 18.8771C20.0114 19.4266 20.828 19.7093 21.6602 19.6647C22.4925 19.6202 23.2743 19.2519 23.8386 18.6387"
        fill={fill}
      />
      <path
        d="M2.38477 18.6387C2.9438 19.2499 3.72041 19.6174 4.54756 19.662C5.37471 19.7066 6.18633 19.4248 6.80784 18.8771C7.38527 19.3908 8.13117 19.6745 8.90399 19.6745C9.6768 19.6745 10.4227 19.3908 11.0001 18.8771C11.5776 19.3908 12.3235 19.6745 13.0963 19.6745C13.8691 19.6745 14.615 19.3908 15.1925 18.8771C15.7699 19.3908 16.5158 19.6745 17.2886 19.6745C18.0614 19.6745 18.8073 19.3908 19.3848 18.8771C20.0114 19.4266 20.828 19.7093 21.6602 19.6647C22.4925 19.6202 23.2743 19.2519 23.8386 18.6387"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 20.5771C2.9438 21.1884 3.72041 21.5559 4.54756 21.6004C5.37471 21.645 6.18633 21.3632 6.80784 20.8156C7.38527 21.3292 8.13117 21.613 8.90399 21.613C9.6768 21.613 10.4227 21.3292 11.0001 20.8156C11.5776 21.3292 12.3235 21.613 13.0963 21.613C13.8691 21.613 14.615 21.3292 15.1925 20.8156C15.7699 21.3292 16.5158 21.613 17.2886 21.613C18.0614 21.613 18.8073 21.3292 19.3848 20.8156C20.0122 21.3632 20.8284 21.6447 21.6601 21.6002C22.4917 21.5557 23.2732 21.1887 23.8386 20.5771"
        fill={fill}
      />
      <path
        d="M2.38477 20.5771C2.9438 21.1884 3.72041 21.5559 4.54756 21.6004C5.37471 21.645 6.18633 21.3632 6.80784 20.8156C7.38527 21.3292 8.13117 21.613 8.90399 21.613C9.6768 21.613 10.4227 21.3292 11.0001 20.8156C11.5776 21.3292 12.3235 21.613 13.0963 21.613C13.8691 21.613 14.615 21.3292 15.1925 20.8156C15.7699 21.3292 16.5158 21.613 17.2886 21.613C18.0614 21.613 18.8073 21.3292 19.3848 20.8156C20.0122 21.3632 20.8284 21.6447 21.6601 21.6002C22.4917 21.5557 23.2732 21.1887 23.8386 20.5771"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3619 4.77686L5.83887 13.9769H11.3619V4.77686Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3613 2.38477L16.8767 13.9771H11.3613V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3613 12.5308V16.5461"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.39189 19.646L4.22266 16.8306H18.1457L16.9765 19.3767"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0459 15.731H7.23047"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SailingIcon.defaultProps = {
  fill: palette.grey?.[500],
  stroke: palette.grey?.[500],
};

export default SailingIcon;
