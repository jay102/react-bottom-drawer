import * as React from "react";
interface IProps {
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
    hideScrollbars?: boolean;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    children: React.ReactNode;
    drawerClassName?: string;
}
declare const SlideUpTransition: ({ isVisible, children, onClose, unmountOnExit, mountOnEnter, duration, hideScrollbars, drawerClassName, }: IProps) => JSX.Element;
export default SlideUpTransition;
