// libs
import React from 'react';
import { get } from 'lodash';
import { UserOutlined } from '@ant-design/icons';

// components
import { useStore } from '@/store/store';
import Image from '@/components/elements/Image';
import FlexWrapper from '../elements/FlexWrapper';

// Component
function ProfilePicture() {
  const { currentUser } = useStore();
  const avatar = (get(currentUser, 'profile.profilePicture') || '').toString();

  return (
    <div className="relative w-[192px] h-[192px] rounded-full overflow-hidden -translate-y-24 border-4 border-stone-100 z-20">
      {avatar ? (
        <Image src={avatar} alt="avatar" className="w-full" />
      ) : (
        <FlexWrapper
          alignItems="center"
          justifyContent="center"
          classes="w-full h-full bg-zinc-800"
        >
          <UserOutlined style={{ color: '#fff', fontSize: '100px' }} />
        </FlexWrapper>
      )}
    </div>
  );
}

export default React.memo(ProfilePicture);
