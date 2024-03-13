// components
import { useContext } from 'react';
import FlexWrapper from '../FlexWrapper';
import Typography, { Type } from '../Typography';
import { SlideContext } from '../../../context/SlideContext';

export enum AnimationType {
  Left = 'left',
  Right = 'right',
}

export enum BgType {
  Beach = 'beach',
  Forest = 'forest',
}

type Props = {
  bg: BgType;
  children: React.ReactNode;
  id: string;
  title: string;
  titleColor: string;
  type: AnimationType;
};

const ANIMATIONS = {
  left: {
    active: 'translate-x-0 z-50',
    inactive: '-translate-x-full',
  },
  right: {
    active: '!translate-x-0 z-50',
    inactive: 'translate-x-full',
  },
};

function Bg(key: string) {
  switch (key) {
    case 'beach':
      return 'bg-beach';
    case 'forest':
      return 'bg-forest';
    default:
      return '';
  }
}

/**
 * This component renders a full page sliding element.
 * The point of this component is to provide a full page sliding effect and
 * it's key is that it's fully modular and can be extended to any number of
 * slides.
 *
 * Currently it only supports 2 types of animations. Slide left and Slide right.
 * If you wish to extend this component to support more animations, you can do so
 * by adding a new type to the AnimationType enum and then adding the new type to
 * the ANIMATIONS object.
 *
 * @example see src/pages/auth/LoginPage.tsx
 * @returns JSX.Element
 */
export default function FullPageSlide({
  bg,
  children,
  id,
  title,
  titleColor,
  type,
}: Props) {
  const { active } = useContext(SlideContext);
  const isActive = active === id;
  // i had to do it like as tailwind wouldn't load the bg image
  // if it was written as a dynimic string literal
  const backgroundImg = Bg(bg);

  return (
    <div
      className={`w-full h-full fixed transition-transform duration-500 ease-in-out ${
        isActive ? ANIMATIONS[type].active : ANIMATIONS[type].inactive
      }`}
    >
      <div
        className={`absolute top-0 left-0 bottom-0 right-0 bg-no-repeat bg-cover bg-center flex flex-col z-0 ${backgroundImg}`}
      />
      <FlexWrapper
        flexDirection="col"
        justifyContent="center"
        alignItems="center"
        classes="h-full"
      >
        <Typography
          component={Type.SPAN}
          classes={`font-pacifico z-10 !text-5xl absolute top-[8%] underline underline-${titleColor} text-${titleColor}`}
        >
          {title}
        </Typography>
        {children}
      </FlexWrapper>
    </div>
  );
}
