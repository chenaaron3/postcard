export const LETTER_VARIANTS = {
    'initial': {
        strokeDasharray: 5,
        opacity: .5,
        pathLength: 0,
        fillOpacity: 0,
    },
    'animate': {
        strokeDasharray: 5,
        opacity: 1,
        pathLength: 1,
        fillOpacity: 1,
        fill: "black",
        transition: { duration: 1, ease: "easeInOut" }
    },
}