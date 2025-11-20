import { type ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({title, size='medium', shape='rounded-md', className='', onClick,})=>{
    const sizeClasses = {
        small: "text-sm px-2 py-1",
        medium: "text-base px-4 py-2",
        large: "text-lg px-6 py-3",
    }
    return(
        <button onClick={onClick} className={ `px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all ${sizeClasses[size]} ${shape} ${className}`}>
            {title}
        </button>
    );
};

export default Button;