declare module 'react-fullpage' {
    export interface fullpageOptions {
      scrollCallback: any;
      delay: number;
      verticalAlign: boolean;
      scrollBar: boolean;
      navigation: boolean;
      className: string;
      sectionClassName: string;
      navigationClass: string;
      navigationAnchorClass: string;
      activeClass: string;
      sectionPaddingTop: string;
      sectionPaddingBottom: string;
      arrowNavigation: boolean;
      activeSection: number;
      touchNavigation: boolean;
      children: any;
    }
  
    interface FullPageProps extends fullpageOptions {
      licenseKey?: string
      render: (comp: { state: any }) => React.ReactElement | void
      debug?: boolean
      pluginWrapper?: () => void
    }
  
    
    // should actually be: class ReactFullpage extends React.Component<FullPageProps>{}
    // not sure how to extend Wrapper to a class so typed as a function
    // FIX: https://github.com/alvarotrigo/react-fullpage/issues/163#issuecomment-650498351
    function ReactFullpage(props: FullPageProps): React.ReactElement
  
    interface WrapperProps {
      children: React.ReactNode
    }
  
    function Wrapper(props: WrapperProps): React.ReactElement
  
    ReactFullpage.Wrapper = Wrapper
  
    export default ReactFullpage
  }