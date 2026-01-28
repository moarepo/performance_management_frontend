export const StaggerEffect = (delay:number, x:number, y:number) =>{
    return {
        initial: {
            y: y || 0,
            x: x || 0,
            opacity: 0,
        },
        enter: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: delay,
                type: 'Spring',
                stiffness:25,
                ease: "easeInOut",
            }
        }
    }
}

export const PageAnimtion = {
    initial:{
        y:-50,
        opacity: 0,
    },
    enter:{
        y:0,
        opacity: 1,
        transition: {
            duration:375,
            type: 'Spring',
            stiffness: 75,
            ease: "easeInOut",
        }
    }
}