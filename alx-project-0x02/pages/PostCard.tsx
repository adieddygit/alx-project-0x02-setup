import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({title, content, userId})=>{
    return(
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>{content}</div>
            <div>
                <span>User ID: {userId}</span>
            </div>
        </div>
    )
};

export default PostCard;