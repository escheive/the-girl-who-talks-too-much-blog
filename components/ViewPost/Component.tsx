
// https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/
import { ElementType, HTMLAttributes, FC } from 'react';

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
    as?: ElementType;
}
  
const Component: FC<ComponentProps> = ({ as: Tag = 'div', ...otherProps }) => {
    return <Tag {...otherProps} />;
};
  
export default Component;