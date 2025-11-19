import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ( {title, content})=>{
    return(
        <>
        <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="text-gray-700">
                {content}
            </div>
        </div>
        </>
    )
}

export default Card;