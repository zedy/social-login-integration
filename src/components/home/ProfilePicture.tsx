// libs
import React from 'react';
import { get } from 'lodash';

// components
import { useStore } from '@/store/store';
import Image from '@/components/elements/Image';

// Component
function ProfilePicture() {
  const { currentUser } = useStore();

  return (
    <div className="relative w-[192px] h-[192px] rounded-full overflow-hidden -translate-y-24 border-4 border-stone-100 z-20">
      <Image
        src={(get(currentUser, 'profile.profilePicture') || '').toString()}
        alt="avatar"
        className="w-full"
      />
    </div>
  );
}

export default React.memo(ProfilePicture);
