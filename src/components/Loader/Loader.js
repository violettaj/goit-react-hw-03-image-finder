import { RotatingLines } from  'react-loader-spinner'

  export const Loader = props => {
    let { isLoading } = props;
    if (isLoading) {
      return <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
    } 
      
    
  };