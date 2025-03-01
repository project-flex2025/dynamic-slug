interface FeatureListProps {
    features: string[];
  }
  
  export default function FeatureList({ features }: FeatureListProps) {
    return (
      <ul className="p-4 list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index} className="text-lg">{feature}</li>
        ))}
      </ul>
    );
  }
  