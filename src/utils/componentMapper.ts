import HeroSection from "@/components/HeroSection";
import FeatureList from "@/components/FeatureList";
import TextBlock from "@/components/TextBlock";
import ContactForm from "@/components/ContactForm";
import Dashboard from "@/components/Dashboard";

const componentMapper: Record<string, React.FC<any>> = {
  HeroSection,
  FeatureList,
  TextBlock,
  ContactForm,
  Dashboard,
};

export default componentMapper;