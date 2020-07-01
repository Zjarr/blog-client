import React from 'react';
import Row from 'react-bootstrap/Row';

import { SimpleButton } from '../../../components/button';
import { Column } from '../../../components/column';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Input } from '../../../components/input';
import { TextArea } from '../../../components/textarea';
import { Toggle } from '../../../components/toggle';
import { COLOR_PURPLE } from '../../../utils/values';

import { BodyContainer, DetailContainer, ImageColumn } from './detail.style';

export const DetailImagePage: React.FC<IDetailImage> = ({ action }) => {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [header, setHeader] = React.useState<string>('');

  const toggleEditView = (): void => {
    return setEditMode(!editMode);
  };

  const initPageProperties = React.useCallback((action): void => {
    if (action === 'add') setHeader('Add image');
    if (action === 'view') setHeader('Image details');
  }, []);

  React.useEffect(() => {
    initPageProperties(action);
  }, [action, initPageProperties]);

  return (
    <DetailContainer>
      <Header title={header} backButtonText={'Images'} backButtonLink={'/admin/images'} />

      <BodyContainer>
        <Row>
          <ImageColumn xl={4} position={'left'}>
            <Image shape={'circle'} height={'180px'} width={'180px'} updatable={editMode} />
          </ImageColumn>

          <Column xl={4} position={'center'}>
            <FormField label={'Name:'}>
              <Input icon={'insert_photo'} placeholder={'An awesome image'} disabled={!editMode} />
            </FormField>

            <FormField label={'Alt:'}>
              <Input icon={'insert_photo'} placeholder={'Awesome alt text'} disabled={!editMode} />
            </FormField>

            <FormField label={'Active:'}>
              <Toggle disabled={!editMode} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField height={'148px'} label={'Description:'}>
              <TextArea disabled={!editMode} />
            </FormField>
          </Column>
        </Row>
      </BodyContainer>

      <Footer>
        {
          editMode && <SimpleButton icon={'clear'} onClick={toggleEditView} />
        }
        <SimpleButton color={COLOR_PURPLE} icon={editMode ? 'done' : 'edit'} onClick={toggleEditView} />
      </Footer>
    </DetailContainer>
  );
};

interface IDetailImage {
  action?: string | null;
  param?: string | null;
}
