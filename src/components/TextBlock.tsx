interface TextBlockProps {
    text: string;
  }
  
  export default function TextBlock({ text }: TextBlockProps) {
    return <p className="p-4 text-gray-700">{text}</p>;
  }
  