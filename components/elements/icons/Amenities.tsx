const AmenitiesIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill, ...props }) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.1875 0C3.60609 0 4.02058 0.0824472 4.4073 0.242634C4.79403 0.402821 5.14542 0.63761 5.4414 0.933597C5.73739 1.22958 5.97218 1.58097 6.13237 1.9677C6.29255 2.35442 6.375 2.76891 6.375 3.1875V6.375H3.1875C2.34212 6.375 1.53137 6.03918 0.933599 5.4414C0.335826 4.84363 1.36289e-06 4.03288 1.36289e-06 3.1875C1.36289e-06 2.34212 0.335826 1.53137 0.933599 0.933597C1.53137 0.335825 2.34212 0 3.1875 0ZM4.875 4.875V3.1875C4.875 2.85374 4.77603 2.52748 4.59061 2.24998C4.40518 1.97247 4.14163 1.75618 3.83328 1.62845C3.52493 1.50073 3.18563 1.46731 2.85829 1.53242C2.53094 1.59754 2.23026 1.75826 1.99426 1.99426C1.75826 2.23026 1.59754 2.53094 1.53243 2.85828C1.46731 3.18563 1.50073 3.52493 1.62845 3.83328C1.75618 4.14163 1.97247 4.40518 2.24998 4.5906C2.52748 4.77603 2.85375 4.875 3.1875 4.875H4.875ZM3.1875 7.875H6.375V11.0625C6.375 11.6929 6.18806 12.3092 5.83781 12.8334C5.48756 13.3576 4.98974 13.7661 4.4073 14.0074C3.82487 14.2486 3.18397 14.3117 2.56565 14.1888C1.94734 14.0658 1.37938 13.7622 0.933599 13.3164C0.487819 12.8706 0.184239 12.3027 0.0612484 11.6844C-0.061742 11.066 0.00138109 10.4251 0.242635 9.8427C0.48389 9.26026 0.892439 8.76244 1.41662 8.41219C1.9408 8.06194 2.55707 7.875 3.1875 7.875ZM3.1875 9.375C2.85375 9.375 2.52748 9.47397 2.24998 9.6594C1.97247 9.84482 1.75618 10.1084 1.62845 10.4167C1.50073 10.7251 1.46731 11.0644 1.53243 11.3917C1.59754 11.7191 1.75826 12.0197 1.99426 12.2557C2.23026 12.4917 2.53094 12.6525 2.85829 12.7176C3.18563 12.7827 3.52493 12.7493 3.83328 12.6215C4.14163 12.4938 4.40518 12.2775 4.59061 12C4.77603 11.7225 4.875 11.3963 4.875 11.0625V9.375H3.1875ZM11.0625 0C11.9079 0 12.7186 0.335825 13.3164 0.933597C13.9142 1.53137 14.25 2.34212 14.25 3.1875C14.25 4.03288 13.9142 4.84363 13.3164 5.4414C12.7186 6.03918 11.9079 6.375 11.0625 6.375H7.875V3.1875C7.875 2.34212 8.21083 1.53137 8.8086 0.933597C9.40637 0.335825 10.2171 0 11.0625 0ZM11.0625 4.875C11.3963 4.875 11.7225 4.77603 12 4.5906C12.2775 4.40518 12.4938 4.14163 12.6215 3.83328C12.7493 3.52493 12.7827 3.18563 12.7176 2.85828C12.6525 2.53094 12.4917 2.23026 12.2557 1.99426C12.0197 1.75826 11.7191 1.59754 11.3917 1.53242C11.0644 1.46731 10.7251 1.50073 10.4167 1.62845C10.1084 1.75618 9.84482 1.97247 9.6594 2.24998C9.47397 2.52748 9.375 2.85374 9.375 3.1875V4.875H11.0625ZM7.875 7.875H11.0625C11.6929 7.875 12.3092 8.06194 12.8334 8.41219C13.3576 8.76244 13.7661 9.26026 14.0074 9.8427C14.2486 10.4251 14.3117 11.066 14.1888 11.6844C14.0658 12.3027 13.7622 12.8706 13.3164 13.3164C12.8706 13.7622 12.3027 14.0658 11.6844 14.1888C11.066 14.3117 10.4251 14.2486 9.8427 14.0074C9.26026 13.7661 8.76244 13.3576 8.41219 12.8334C8.06194 12.3092 7.875 11.6929 7.875 11.0625V7.875ZM9.375 9.375V11.0625C9.375 11.3963 9.47397 11.7225 9.6594 12C9.84482 12.2775 10.1084 12.4938 10.4167 12.6215C10.7251 12.7493 11.0644 12.7827 11.3917 12.7176C11.7191 12.6525 12.0197 12.4917 12.2557 12.2557C12.4917 12.0197 12.6525 11.7191 12.7176 11.3917C12.7827 11.0644 12.7493 10.7251 12.6215 10.4167C12.4938 10.1084 12.2775 9.84482 12 9.6594C11.7225 9.47397 11.3963 9.375 11.0625 9.375H9.375Z"
        fill={fill}
      />
    </svg>
  );
};

AmenitiesIcon.defaultProps = {
  fill: "#5A6987",
};

export default AmenitiesIcon;
