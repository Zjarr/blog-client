import React from 'react';

import { toBase64 } from '../../utils/functions';
import { IImageResult } from '../../utils/interfaces';
import { COLOR_PURPLE } from '../../utils/values';

import { SimpleButton } from '../button';
import { Modal } from '../modal';
import { TitleText } from '../text';

import {
  ButtonContainer,
  ImageContainer,
  ImageInput,
  ImageLabel,
  ImageResult,
  ImageText,
  TitleContainer,
  UpdateImageContainer
} from './update-image.style';

export const UpdateImage: React.FC<IUpdateImage> = ({ src, onClose, visible }) => {
  const [imageSrc, setImageSrc] = React.useState<string>(src);
  const [uploadedImageResult, setUploadedImageResult] = React.useState<IImageResult | null>(null);
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
          <TitleText>Update image</TitleText>
        </TitleContainer>

        <ImageContainer active={!!imageSrc}>
          <ImageLabel htmlFor={'image-input'} />
          <ImageText>Choose image</ImageText>
          <ImageInput id={'image-input'} ref={imageRef} type={'file'} accept={'image/*'} onChange={handleImageUpdate} />

          {
            imageSrc && <ImageResult shape={'circle'} src={imageSrc} />
          }
        </ImageContainer>

        <ButtonContainer>
          <SimpleButton icon={'delete'} onClick={handleImageDelete} />
          <SimpleButton color={COLOR_PURPLE} icon={'check'} onClick={(): void => handleOnCloseRequest(true)} />
        </ButtonContainer>
      </UpdateImageContainer>
    </Modal>
  );
};

interface IUpdateImage {
  src: string;
  visible: boolean;
  onClose: (result: IImageResult | null) => void;
}
