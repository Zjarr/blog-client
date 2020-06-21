import React from 'react';

import { Button } from '../button';
import { Modal } from '../modal';
import { Text } from '../text';

import { toBase64 } from '../../lib/functions';
import { COLOR_PURPLE } from '../../lib/values';

import {
  ButtonContainer,
  ImageContainer,
  ImageInput,
  ImageLabel,
  ImageResult,
  ImageText,
  TitleContainer,
  UpdateImageContainer
} from './style.update-image.components';

export const UpdateImage: React.FC<IUpdateImage> = ({ src, onClose, visible }) => {
  const [imageSrc, setImageSrc] = React.useState<string>(src);
  const [uploadedImageResult, setUploadedImageResult] = React.useState<IUpdateImageResult | null>(null);
  const imageRef = React.useRef<HTMLInputElement>(null);

  const handleOnCloseRequest = (update: boolean): void => {
    if (!update) {
      return onClose && onClose(null);
    }

    return onClose && onClose(uploadedImageResult);
  };

  const handleImageUpdate = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const image: File | null = e.target.files![0];

    if (!image) {
      return;
    }

    try {
      const imageResult: string = await toBase64(image) as string;

      setUploadedImageResult({
        base64: imageResult,
        file: image
      });

      return setImageSrc(imageResult);
    } catch (error) {
      throw error;
    } finally {
      if (imageRef.current) imageRef.current.value = '';
    }
  };

  const handleImageDelete = (): void => {
    setUploadedImageResult({
      base64: '',
      file: null
    });

    return setImageSrc('');
  };

  React.useEffect(() => {
    if (visible) {
      setUploadedImageResult(null);
      setImageSrc(src);
    }

  }, [src, visible]);

  return (
    <Modal visible={visible} closeButton onClose={(): void => handleOnCloseRequest(false)}>
      <UpdateImageContainer>
        <TitleContainer>
          <Text type={'title'}>Update image</Text>
        </TitleContainer>

        <ImageContainer active={!!imageSrc}>
          <ImageLabel htmlFor={'image-input'} />
          <ImageText type={'subtitle'}>Choose image</ImageText>
          <ImageInput id={'image-input'} ref={imageRef} type={'file'} accept={'image/*'} onChange={handleImageUpdate} />

          {
            imageSrc && <ImageResult type={'circle'} src={imageSrc} />
          }
        </ImageContainer>

        <ButtonContainer>
          <Button type={'color'} icon={'delete'} onClick={handleImageDelete} />
          <Button type={'color'} color={COLOR_PURPLE} icon={'check'} onClick={(): void => handleOnCloseRequest(true)} />
        </ButtonContainer>
      </UpdateImageContainer>
    </Modal>
  );
};

export interface IUpdateImageResult {
  file: File | null;
  base64: string
}

interface IUpdateImage {
  src: string;
  visible: boolean;
  onClose: (result: IUpdateImageResult | null) => void;
}
