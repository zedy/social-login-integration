import FlexWrapper from '../elements/FlexWrapper';
import Typography, { Type } from '../elements/Typography';

// Component
export default function Footer() {
  return (
    <footer className="w-full bg-zinc-800 flex justify-center mt-16">
      <FlexWrapper
        alignItems="center"
        classes="px-5 md:max-w-5xl justify-between h-24"
      >
        <Typography component={Type.H4} classes="text-slate-100">
          Viaggiare
        </Typography>
        <Typography component={Type.SPAN} classes="text-slate-100">
          © {new Date().getFullYear()}, All rights reserved.
        </Typography>
      </FlexWrapper>
    </footer>
  );
}
