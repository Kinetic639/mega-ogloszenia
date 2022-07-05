export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const FadeInUpVariants = {
    initial: {y: 60, opacity: 0, transition: {duration: .5, ease: defaultEasing}, willChange: "opacity, transform"},
    animate: {
        y: 0,
        opacity: 1,
        transition: {staggerChildren: .05, duration: .5, ease: defaultEasing},
        willChange: "opacity, transform"
    },
    exit: {y: 60, opacity: 0, transition: {duration: .5, ease: defaultEasing}, willChange: "opacity, transform"}
};


export const defaultPageFadeInVariants = {
    initial: {opacity: 0, transition: {duration: .4, ease: defaultEasing}, willChange: "opacity, transform"},
    animate: {opacity: 1, transition: {duration: .4, ease: defaultEasing}, willChange: "opacity, transform"},
    exit: {opacity: 0, transition: {duration: .4, ease: defaultEasing}, willChange: "opacity, transform"}
};
