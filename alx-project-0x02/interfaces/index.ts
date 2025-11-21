// import { JSX, ReactNode } from "react";

export interface CardProps{
  title: string;
  content: string | React.ReactNode;
}

export interface PostData{
    title: string;
    content: string;
}

export interface PostModalProps{
    onClose: ()=>void;
    onSubmit: (post: PostData)=> void 
}

export interface ButtonProps{
   title?: string;
   size?:  "small" | "medium" | "large";
   shape?: "rounded-sm" | "rounded-md" | "rounded-full";
   className?: string;
   styles?: string;
   onClick?: ()=> void;
}

export interface HeaderProps{
  title: string;
}

export interface PostProps {
  title: string;
  userId: number | string;
  content: string 
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;

  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };

  phone: string;
  website: string;

  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

//   subtitle?: string;
//   description?: string;

  // Media
//   image?: string;
//   imageAlt?: string;

  // Actions
//   href?: string;
//   onClick?: () => void;
//   buttonLabel?: string;

  // Layout / Styling
//   className?: string;
//   rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
//   shadow?: boolean;

  // Data (optional for dynamic content)
//   tag?: string;
//   badge?: string;