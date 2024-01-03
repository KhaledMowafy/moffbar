import React, { ReactNode } from 'react';
import './App.css';
type objectType = {
    link?: string;
    name?: string;
};
type Props = objectType[];
interface MyComponentProps {
    data: Props;
    children:ReactNode[];
    bgcolor?: string;
    textColor?:string;
    textStroke?:string;
    closeButton?:string;
    closeActive?:string;
}
declare const Navigation: ({ data, children, bgcolor, textColor, textStroke, closeButton, closeActive }: MyComponentProps) => React.JSX.Element;
export default Navigation;
