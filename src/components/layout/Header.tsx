// libs
import { LogoutOutlined } from '@ant-design/icons';

// components
import Image from '../elements/Image';
import FlexWrapper from '../elements/FlexWrapper';
import Button from '../elements/Button';

// Component
export default function Header() {
  return (
    <header className="w-full flex justify-center h-80 bg-zinc-800 py-2">
      <FlexWrapper classes="px-5 md:max-w-5xl justify-between h-12">
        <Image src="/v_logo.png" alt="Logo" />
        <Button
          className="text-slate-100"
          icon={
            <LogoutOutlined style={{ color: '#fff', marginRight: '5px' }} />
          }
        >
          Logout
        </Button>
      </FlexWrapper>
    </header>
  );
}
