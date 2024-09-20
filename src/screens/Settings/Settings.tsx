import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// import { Sidebar } from 'components/Sidebar';

import { SettingsStyles } from './Settings.style';
import { useSettingsState } from './Settings.state';

export const Settings: FC = () => {
  const {
    // fullName,
    name,
    // activeAccount,
    onUploadProfilePhotoHandler,
    isUploadingPhoto,
    isHover,
    userProfilePhoto,
    active,
    profile_image,
    onGetProfilePhoto,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  } = useSettingsState();

  // useEffect(() => {
  //   onGetProfilePhoto(profile_image);
  // }, []);
  return (
    <SettingsStyles.Wrapper>
      {/* <Sidebar
        isHover={isHover}
        onMouseEnterHandler={onMouseEnterHandler}
        onMouseLeaveHandler={onMouseLeaveHandler}
        isUploadingPhoto={isUploadingPhoto}
        avatatSrc={userProfilePhoto}
        userFullName={name}
        userRole={active?.role as TRoles}
        isActiveAccount={!!active}
        onUploadProfilePhotoHandler={onUploadProfilePhotoHandler}
      /> */}
      
      <Outlet />
    </SettingsStyles.Wrapper>
  );
};
