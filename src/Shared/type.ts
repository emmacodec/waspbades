export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    Varieties = 'varieties',
    EnrollNow = 'enroll now',
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface VarietyType {
    name: string;
    description: string;
    image: string;
  }