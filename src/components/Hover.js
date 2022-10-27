import React from "react"

export default function Hover({ children, inactive }) {
    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {isHovering ? children : inactive}
        </div>
    )
}