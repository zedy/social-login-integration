import { ElementType, Suspense } from 'react';

export default function Loadable(Component: ElementType) {
  return function (props: any) {
    return (
      <Suspense fallback={<div>Loading ...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
}
