import React from "react";

interface IState {
    hasError: boolean;
}
interface IProps {
}

/**
 * Final boundary for errors to avoid the whole app crash
 */
export class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h3>Something went wrong. Please reload the page</h3>
        }

        return this.props.children;
    }
}