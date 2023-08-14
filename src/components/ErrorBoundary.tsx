import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

interface Props {
   render?: (error: Error | null) => ReactNode;
}

interface State {
   hasError: boolean;
   error: Error | null;
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
   public state: State = {
       hasError: false,
       error: null
   };

   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
       console.error('Uncaught error:', error, errorInfo);
       this.setState({ hasError: true, error });
   }

   render() {
       const { hasError, error } = this.state;
       const { children } = this.props;
       if (hasError && !this.props.render) {
           return (
               <div>
                   <p>Oops! ha ocurrido un error inesperado</p>
                   {error?.toString()}
               </div>
           );
        };

       if (hasError && this.props.render) {
           return this.props.render(error);
       };

       return children;
    }
}

export default ErrorBoundary;

/* Usage:
<FinalErrorBoundary render={(error) => <p>{`Ups D: error`}</p>}>
<MyBug />
</FinalErrorBoundary> */
