import React from "react";

const CheckInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 13H4V18H16V2H4V7H2V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V13ZM8 9V6L13 10L8 14V11H0V9H8Z"
        fill="#9AA7C1"
      />
    </svg>
  );
};

export default CheckInIcon;
