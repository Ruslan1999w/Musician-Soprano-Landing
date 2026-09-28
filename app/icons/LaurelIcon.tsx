type LaurelIconProps = {
    width?: string;
    height?: string;
    className?: string;
};

export const LaurelIcon = ({ width = '40', height = '40', className = '' }: LaurelIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={width}
        height={height}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
    >
        <path d="M50 90 C 20 85, 8 60, 10 30" />
        <path d="M14 34 L4 28 M15 44 L4 40 M18 54 L8 52 M22 64 L13 65 M28 73 L21 76 M36 80 L31 85" />
        <path d="M50 90 C 80 85, 92 60, 90 30" />
        <path d="M86 34 L96 28 M85 44 L96 40 M82 54 L92 52 M78 64 L87 65 M72 73 L79 76 M64 80 L69 85" />
    </svg>
);
