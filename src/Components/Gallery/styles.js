export const TITLE = "flex flex-row justify-center p-8 text-4xl text-green1"

export const GALLERY_CONTAINER = "items-center"

export const CAROUSEL_CONTAINER = "flex flex-row items-center"

export const ITEM = "p-0.5 object-cover h-[200px] w-[640px] sm:w-[384px] md:w-[341px]"

export const MOBILE_CAROUSEL = [
    {   
        breakpoint: 1023, // max-width del punto de quiebre
        cols: 3, 
        loop: true, 
        autoplay: 6000
    },
    {
        breakpoint: 767,  // max-width del punto de quiebre
        cols: 2, 
        loop: true, 
        autoplay: 4000
    },
];
