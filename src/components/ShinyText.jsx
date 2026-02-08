import './ShinyText.css';

/**
 * ShinyText Component - Animated shimmer/shiny text effect
 * @param {Object} props
 * @param {React.ReactNode} props.children - Text content to animate
 * @param {string} props.className - Additional CSS classes
 */
const ShinyText = ({ children, className = '' }) => {
    return (
        <span className={`shiny-text ${className}`}>
            {children}
        </span>
    );
};

export default ShinyText;
