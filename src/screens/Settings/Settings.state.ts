import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { getCompressedImage } from 'services/utils';

import { getProfilePhoto, profileUploadPhoto } from './settings.api';
import { setUserAvatar } from '../SignUp/reducer/signup.reducer';

export const useSettingsState = () => {
  const {
    user: { name, active, profile_image, id },
    token,
  } = useSelector((state: IState) => state.user);

  const dispatch = useDispatch();
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(
    !profile_image ? false : true
  );
  const [isHover, setIsHover] = useState(false);
  const [userProfilePhoto, setUserProfilePhoto] = useState('');

  const onMouseEnterHandler = () => setIsHover(true);
  const onMouseLeaveHandler = () => setIsHover(false);

  const onGetProfilePhoto = async (profileImage?: string) => {
    try {
      if (!id) return;
      const { data } = await getProfilePhoto(id, token);
      setIsUploadingPhoto(false);
      setUserProfilePhoto(URL.createObjectURL(data));
    } catch (error) {
      setIsUploadingPhoto(false);
      console.log(error);
    }
  };

  const onUploadProfilePhotoHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      if (
        !event.target.files?.length ||
        !event.target.files[0].type.match('image')
      )
        return;
      setIsHover(false);
      setIsUploadingPhoto(true);

      const formData = new FormData();
      const compressedFile = await getCompressedImage(event.target.files[0], 1);
      console.log('🟥  compressedFile:', compressedFile);
      formData.append('profile_image', compressedFile);
      const { data } = await profileUploadPhoto(formData, token);

      dispatch(setUserAvatar(data.profile_image));
      onGetProfilePhoto(data.profile_image);
    } catch (error) {
      setIsHover(false);
      setIsUploadingPhoto(false);
      console.log(error);
    }
  };

  // const activeAccount = accounts?.find(
  //   (account) => account.id === active_account
  // );

  return {
    // fullName,
    name,
    // activeAccount,
    isUploadingPhoto,
    isHover,
    userProfilePhoto,
    active,
    profile_image,
    onGetProfilePhoto,
    onMouseEnterHandler,
    onUploadProfilePhotoHandler,
    onMouseLeaveHandler,
  };
};
