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