import { motion } from 'motion/react';

import { LETTER_VARIANTS } from './animation';

export const Letter: React.FC<{ animateState: string }> = ({ animateState }) => {
    return (
        <motion.svg
            style={{ translateY: "50%" }}
            width="55.274" height="90.779" viewBox="0 0 55.274 90.779" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" stroke-linecap="round" font-size="9pt" stroke="#000" stroke-width="0.25mm">
                <motion.path
                    strokeWidth="2"
                    strokeDashoffset="5"
                    variants={LETTER_VARIANTS}
                    initial="initial"
                    animate={animateState}
                    d="M 21.289 29.841 L 20.996 29.841 A 102.621 102.621 0 0 1 16.838 31.867 A 85.002 85.002 0 0 1 14.453 32.917 A 16.942 16.942 0 0 1 8.988 34.189 A 20.016 20.016 0 0 1 7.617 34.236 A 10.229 10.229 0 0 1 6.07 34.125 Q 4.997 33.961 4.15 33.552 A 6.379 6.379 0 0 1 2.457 32.381 A 5.871 5.871 0 0 1 1.855 31.697 A 7.91 7.91 0 0 1 0.767 29.673 A 9.444 9.444 0 0 1 0.537 28.962 A 14.505 14.505 0 0 1 0.121 26.895 A 17.831 17.831 0 0 1 0 25.544 L 2.344 18.415 A 51.708 51.708 0 0 1 3.333 15.888 A 66.858 66.858 0 0 1 4.541 13.191 A 40.787 40.787 0 0 1 7.568 7.868 A 26.865 26.865 0 0 1 11.523 3.23 Q 13.77 1.13 16.602 0.251 Q 20.206 -0.303 23.33 0.367 A 15.635 15.635 0 0 1 23.682 0.447 A 22.733 22.733 0 0 1 26.912 1.465 A 17.668 17.668 0 0 1 29.395 2.693 Q 31.836 4.157 33.35 5.866 A 13.488 13.488 0 0 1 34.104 6.793 Q 34.821 7.763 35.08 8.569 A 3.4 3.4 0 0 1 35.156 8.845 A 10.699 10.699 0 0 1 34.782 10.539 A 13.848 13.848 0 0 1 34.277 11.921 A 47.818 47.818 0 0 1 32.764 15.144 A 43.291 43.291 0 0 1 31.83 16.864 A 34.476 34.476 0 0 1 31.104 18.073 A 29.181 29.181 0 0 0 30.628 18.855 Q 30.151 19.666 29.883 20.271 A 31.034 31.034 0 0 0 28.59 23.738 A 33.996 33.996 0 0 0 28.516 23.982 Q 27.93 25.935 27.49 27.986 A 44.114 44.114 0 0 0 26.807 32.136 A 38.541 38.541 0 0 0 26.624 34.15 A 29.225 29.225 0 0 0 26.562 35.993 L 26.563 37.458 A 46.457 46.457 0 0 1 37.305 32.868 A 41.318 41.318 0 0 1 48.022 31.215 A 38.716 38.716 0 0 1 48.73 31.208 L 50.537 31.208 A 9.354 9.354 0 0 1 52.428 31.395 A 8.604 8.604 0 0 1 52.686 31.452 A 4.463 4.463 0 0 1 54.492 32.331 A 2.062 2.062 0 0 1 55.236 33.651 A 3.043 3.043 0 0 1 55.273 34.138 Q 55.273 35.993 53.223 35.993 Q 52.93 35.993 51.855 35.847 A 13.208 13.208 0 0 1 51.375 35.773 Q 50.71 35.657 50.411 35.515 A 1.15 1.15 0 0 1 50.391 35.505 Q 49.761 35.595 48.303 35.851 A 234.089 234.089 0 0 0 48.047 35.896 Q 46.387 36.189 44.434 36.579 A 123.659 123.659 0 0 0 42.554 36.97 A 98.004 98.004 0 0 0 40.82 37.361 A 74.837 74.837 0 0 1 40.051 37.538 Q 39.101 37.751 38.591 37.832 A 7.424 7.424 0 0 1 38.477 37.849 A 5.404 5.404 0 0 0 38.323 37.903 Q 38.077 37.994 37.639 38.171 A 62.903 62.903 0 0 0 37.354 38.288 A 172.032 172.032 0 0 1 36.487 38.642 A 218.099 218.099 0 0 1 35.547 39.021 A 75.069 75.069 0 0 1 33.875 39.667 A 68.38 68.38 0 0 1 33.643 39.753 Q 32.715 40.095 32.422 40.388 A 5.934 5.934 0 0 0 31.802 40.582 Q 31.256 40.785 30.615 41.12 Q 29.59 41.657 28.613 42.195 Q 27.774 42.656 27.115 43.046 A 37.128 37.128 0 0 0 26.904 43.171 A 14.511 14.511 0 0 0 26.733 43.276 Q 26.288 43.551 26.196 43.662 A 0.084 0.084 0 0 0 26.172 43.708 L 25.195 45.075 L 22.852 69.782 A 23.86 23.86 0 0 1 22.515 71.838 Q 22.303 72.872 21.988 74.039 A 52.474 52.474 0 0 1 21.436 75.935 A 36.205 36.205 0 0 1 18.457 82.868 A 20.898 20.898 0 0 1 15.129 87.352 A 19.054 19.054 0 0 1 13.916 88.484 A 9.137 9.137 0 0 1 7.813 90.779 A 6.634 6.634 0 0 1 7.005 90.732 Q 6.577 90.679 6.208 90.568 A 3.943 3.943 0 0 1 6.104 90.534 A 2.299 2.299 0 0 1 5.472 90.199 Q 5.072 89.906 4.688 89.411 A 55.068 55.068 0 0 1 4.236 87.995 A 43.276 43.276 0 0 1 3.857 86.677 A 15.335 15.335 0 0 1 3.55 85.295 A 12.168 12.168 0 0 1 3.418 84.284 Q 3.32 83.161 3.271 82.038 A 45.941 45.941 0 0 1 3.242 81.134 Q 3.232 80.732 3.227 80.286 A 87.345 87.345 0 0 1 3.223 79.353 L 3.223 78.62 L 3.223 77.448 A 14.459 14.459 0 0 1 3.238 76.765 A 11.316 11.316 0 0 1 3.271 76.277 Q 3.314 75.812 3.319 75.603 A 2.177 2.177 0 0 0 3.32 75.544 A 173.372 173.372 0 0 1 5.713 66.12 Q 7.031 61.482 8.887 57.136 Q 10.742 52.79 13.379 48.933 A 35.304 35.304 0 0 1 18.274 43.233 A 41.066 41.066 0 0 1 19.922 41.755 Q 20.002 41.356 20.147 40.306 A 112.027 112.027 0 0 0 20.215 39.802 A 56.566 56.566 0 0 1 20.563 37.55 A 63.087 63.087 0 0 1 20.703 36.775 A 38.624 38.624 0 0 0 21.037 34.695 A 32.707 32.707 0 0 0 21.143 33.796 A 123.74 123.74 0 0 1 21.213 33.134 Q 21.312 32.22 21.385 31.709 A 17.932 17.932 0 0 1 21.387 31.697 Q 21.387 31.501 21.338 30.769 A 66.849 66.849 0 0 1 21.321 30.513 Q 21.289 30 21.289 29.841 Z M 8.252 82.38 A 233.901 233.901 0 0 0 8.186 81.645 Q 8.083 80.514 8.008 79.841 A 185.743 185.743 0 0 1 8.359 77.714 A 166.348 166.348 0 0 1 9.521 71.589 Q 10.352 67.634 11.572 63.972 A 54.747 54.747 0 0 1 14.551 56.794 A 38.529 38.529 0 0 1 15.609 54.824 A 44.199 44.199 0 0 1 18.945 49.861 Q 18.945 50.154 18.994 51.179 A 21.906 21.906 0 0 1 18.994 51.182 Q 19.032 51.981 19.041 52.334 A 7.179 7.179 0 0 1 19.043 52.497 A 77.225 77.225 0 0 1 19.019 54.475 A 61.435 61.435 0 0 1 18.945 56.306 A 68.535 68.535 0 0 1 18.652 59.87 Q 18.457 61.677 18.213 63.679 Q 17.969 65.681 17.578 67.927 Q 17.432 69.026 17.01 70.811 A 74.36 74.36 0 0 1 16.699 72.077 A 42.108 42.108 0 0 1 16.612 72.413 A 45.815 45.815 0 0 1 14.941 77.497 A 25.725 25.725 0 0 1 14.517 78.514 A 22.374 22.374 0 0 1 12.305 82.429 Q 10.742 84.626 8.887 85.114 Q 8.582 84.443 8.41 83.543 A 11.72 11.72 0 0 1 8.252 82.38 Z M 28.125 10.798 L 28.125 10.407 A 14.677 14.677 0 0 0 27.211 8.776 Q 26.043 6.99 24.663 6.306 A 4.338 4.338 0 0 0 24.561 6.257 A 5.758 5.758 0 0 0 22.114 5.706 Q 21.254 5.706 20.361 5.964 A 10.125 10.125 0 0 0 18.152 6.916 Q 17.215 7.452 16.269 8.213 A 17.893 17.893 0 0 0 15.918 8.503 A 35.175 35.175 0 0 0 11.921 12.503 A 38.628 38.628 0 0 0 11.67 12.8 A 38.083 38.083 0 0 0 8.105 17.829 Q 6.543 20.466 5.664 22.663 A 21.724 21.724 0 0 0 5.201 23.925 Q 4.755 25.277 4.688 26.228 Q 4.59 27.595 5.664 27.4 A 4.164 4.164 0 0 0 6.494 28.767 A 1.751 1.751 0 0 0 7.427 29.293 A 2.648 2.648 0 0 0 8.008 29.353 A 16.114 16.114 0 0 0 12.25 28.812 A 13.811 13.811 0 0 0 15.186 27.644 Q 18.359 25.935 20.801 23.2 A 33.544 33.544 0 0 0 25.049 17.243 A 53.294 53.294 0 0 0 27.799 11.604 A 48.535 48.535 0 0 0 28.125 10.798 Z"
                    id="0"
                    vector-effect="non-scaling-stroke" />
            </g>
        </motion.svg>
    );
}