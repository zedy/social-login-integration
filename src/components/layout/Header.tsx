// libs
import { LogoutOutlined } from '@ant-design/icons';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';
import Button from '@/components/elements/Button';
import { useStore } from '@/store/store';
import Typography, { Type } from '@/components/elements/Typography';

// Component
export default function Header() {
  const { logoutUser } = useStore();

  return (
    <header className="w-full flex justify-center min-h-[12rem] bg-zinc-800 py-2">
      <FlexWrapper classes="px-5 md:max-w-5xl justify-between h-12">
        <Typography
          classes="text-stone-100 font-pacifico opacity-90 !text-2xl"
          component={Type.H2}
        >
          Viaggiare
        </Typography>
        <Button
          className="text-slate-100"
          onClick={logoutUser}
          icon={
            <LogoutOutlined style={{ color: '#fff', marginRight: '5px' }} />
          }
        >
          Logout
        </Button>
      </FlexWrapper>
      <Typography component={Type.H1} isSr>
        Viaggiare
      </Typography>
    </header>
  );
}
