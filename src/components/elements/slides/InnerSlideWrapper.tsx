// libs
import { useContext } from 'react';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import { SlideContext } from '@/context/SlideContext';

export enum AnimationType {
  Opacity = 'opacity',
  TransitionY = 'transitiony',
}

type Props = {
  children: React.ReactNode;
  classes?: string;
  id: string;
  type: AnimationType;
};

const ANIMATIONS = {
  opacity: {
    active: 'opacity-100',
    inactive: 'opacity-0',
    keyword: 'opacity',
  },
  transitiony: {
    active: '!translate-y-0',
    inactive: 'translate-y-[200%]',
    keyword: 'translate',
  },
};

/**
 * This component is meant to be used as a wrapper for sub-slides within a FullPageSlide.
 * It provides additional set of animations to to the sub-slides.
 *
 * You do not have to use this component with the FullPageSlide component. The parent compnent
 * will still work as expected without this sub-component. This component is only meant to be
 * used as a wrapper for sub-slides within a FullPageSlide.
 *
 * If you wish to extend this component to support more animations, you can do so
 * by adding a new type to the AnimationType enum and then adding the new type to
 * the ANIMATIONS object.
 *
 * @example see src/pages/auth/Login.tsx
 * @returns JSX.Element
 */
export default function InnerSlideWrapper({
  children,
  classes,
  id,
  type,
}: Props) {
  const { active } = useContext(SlideContext);
  const isActive = active === id;

  return (
    <FlexWrapper
      flexDirection="col"
      classes={`!w-auto p-5 mt-[10%] xs:mt-0 relative overflow-hidden z-10 bg-slate-200 rounded-md duration-500 ease-in-out delay-300 transform-${
        ANIMATIONS[type].keyword
      } ${
        isActive ? ANIMATIONS[type].active : ANIMATIONS[type].inactive
      } ${classes}`}
    >
      {children}
    </FlexWrapper>
  );
}
