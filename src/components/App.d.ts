import React from 'react';
import './App.css';
type objectType = {
    link?: string;
    name?: string;
};
type Props = objectType[];
interface MyComponentProps {
    data: Props;
    bgcolor?: string;
    textColor?:string;
    textStroke?:string;
    closeButton?:string;
    closeActive?:string;
}
declare const MoffBar: ({ data, bgcolor, textColor, textStroke, closeButton, closeActive }: MyComponentProps) => React.JSX.Element;
export default MoffBar;
