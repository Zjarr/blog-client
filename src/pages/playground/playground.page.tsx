import React from 'react';

import { Banner } from '../../components/banner';
import { MenuButton, SimpleButton, TextButton } from '../../components/button';
import { IconCard, ImageCard } from '../../components/card';
import { ChangePassword } from '../../components/change-password';
import { Dropdown } from '../../components/dropdown';
import { FormField } from '../../components/form-field';
import { Header } from '../../components/header';
import { Image } from '../../components/image';
import { ImageList } from '../../components/image-list';
import { Input } from '../../components/input';
import { List } from '../../components/list';
import { Loading } from '../../components/loading';
import { Renderer } from '../../components/renderer';
import { TitleText } from '../../components/text';
import { TextArea } from '../../components/textarea';
import { Toggle } from '../../components/toggle';
import { UpdateImage } from '../../components/update-image';
import { IImageResult } from '../../utils/interfaces';
import { COLOR_GREEN, COLOR_PURPLE } from '../../utils/values';

const string = `
# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a dui accumsan, tempor turpis quis, efficitur diam.
Vestibulum dignissim ex at suscipit sodales. In non consequat quam, vitae aliquam nibh. Morbi pharetra egestas pellentesque.
Donec sit amet erat sem. Suspendisse at aliquet neque, at rutrum turpis.

Quisque erat tortor, eleifend ut interdum et, varius nec est. Praesent porta rutrum enim, ut consequat lectus feugiat ac.
Maecenas interdum tincidunt quam, venenatis rhoncus ligula rutrum eget. Ut consequat eleifend urna et euismod.
Sed sollicitudin posuere ante. In hac habitasse platea dictumst.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)
`;


export const PlaygroundPage: React.FC<IPlaygroundPage> = () => {
  const [changePasswordModalVisible, setChangePasswordModalVisible] = React.useState<boolean>(false);
  const [imageListModalVisible, setImageListModalVisible] = React.useState<boolean>(false);
  const [loadingModalVisible, setLoadingModalVisible] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>('');

  const [md] = React.useState<string>(string);
  const [updateImageModalVisible, setUpdateImageModalVisible] = React.useState<boolean>(false);

  return (
    <>
      <TitleText>Header</TitleText>
      <p></p>
      <Header title={'Title'} backButtonText={'Home'} />
      <p></p>
      <Header title={'Title'} />
      <br />
      <br />
      <br />

      <TitleText>Input</TitleText>
      <p></p>
      <Input icon={'group'} value={'Pablo Navarro'} onChange={(): void => { }} />
      <p></p>
      <Input icon={'group'} value={'Pablo Navarro'} onChange={(): void => { }} disabled />
      <p></p>
      <Input icon={'group'} value={'Pablo Navarro'} onChange={(): void => { }} error={'Some error text. You need to fix this'} />
      <br />
      <br />
      <br />


      <TitleText>Dropdown</TitleText>
      <p></p>
      <Dropdown
        name={'Dropdown'}
        values={[]}
        icon={'group'}
        onChange={(): void => { }}
      />
      <p></p>
      <Dropdown
        name={'Dropdown'}
        values={[
          { name: 'value', value: 'name' }
        ]}
        icon={'group'}
        onChange={(): void => { }}
      />
      <p></p>
      <Dropdown
        name={'Dropdown'}
        values={[
          { name: 'value', value: 'name' },
          { name: 'value', value: 'name' },
          { name: 'value', value: 'name' }
        ]}
        icon={'group'}
        onChange={(): void => { }}
      />
      <p></p>
      <Dropdown
        name={'Dropdown'}
        values={[]}
        icon={'group'}
        onChange={(): void => { }}
        disabled
      />
      <p></p>
      <Dropdown
        name={'Dropdown'}
        error={'Some error to fix.'}
        values={[]}
        icon={'group'}
        onChange={(): void => { }}
      />
      <br />
      <br />
      <br />


      <TitleText>Image</TitleText>
      <p></p>
      <Image shape={'circle'} onUpdateClick={(): void => setUpdateImageModalVisible(true)} src={image} updatable />
      <p></p>
      <Image shape={'square'} onUpdateClick={(): void => setUpdateImageModalVisible(true)} src={image} updatable />
      <UpdateImage
        visible={updateImageModalVisible}
        onClose={(result: IImageResult | null): void => {
          setImage(result ? result.base64 : image);
          setUpdateImageModalVisible(false);
        }}
        src={image} />
      <br />
      <br />
      <br />


      <TitleText>Toggle</TitleText>
      <p></p>
      <Toggle disabled />
      <p></p>
      <Toggle />
      <br />
      <br />
      <br />


      <TitleText>Button</TitleText>
      <p></p>
      <SimpleButton width={'auto'} color={COLOR_PURPLE} icon={'group'}>Hello</SimpleButton>
      <p></p>
      <SimpleButton width={'auto'} icon={'group'}>Hello</SimpleButton>
      <p></p>
      <SimpleButton icon={'group'}></SimpleButton>
      <p></p>
      <SimpleButton width={'auto'} icon={'group'} disabled>Hello</SimpleButton>
      <p></p>
      <SimpleButton icon={'group'} disabled></SimpleButton>
      <p></p>
      <SimpleButton shape={'circle'} color={COLOR_PURPLE} icon={'group'}>Hello</SimpleButton>
      <p></p>
      <SimpleButton shape={'circle'} icon={'group'}>Hello</SimpleButton>
      <p></p>
      <SimpleButton shape={'circle'} color={COLOR_PURPLE} icon={'group'}></SimpleButton>
      <p></p>
      <SimpleButton shape={'circle'} icon={'group'} disabled>Hello</SimpleButton>
      <p></p>
      <SimpleButton shape={'circle'} icon={'group'} disabled></SimpleButton>
      <p></p>
      <MenuButton icon={'group'}>Hello</MenuButton>
      <p></p>
      <MenuButton icon={'group'} active>Hello</MenuButton>
      <p></p>
      <MenuButton shape={'circle'} icon={'group'}>Hello</MenuButton>
      <p></p>
      <MenuButton shape={'circle'} icon={'group'} active>Hello</MenuButton>
      <p></p>
      <TextButton icon={'group'}>Hello</TextButton>
      <p></p>
      <TextButton icon={'group'} disabled>Hello</TextButton>
      <p></p>
      <TextButton>Hello</TextButton>
      <p></p>
      <TextButton disabled>Hello</TextButton>
      <br />
      <br />
      <br />


      <TitleText>Modal</TitleText>
      <p></p>
      <SimpleButton
        icon={'visibility'}
        width={'auto'}
        onClick={(): void => setLoadingModalVisible(true)}>Show Loading Modal</SimpleButton>
      <Loading
        text={'Adding new user...'}
        visible={loadingModalVisible}
      />
      <p></p>
      <SimpleButton
        icon={'visibility'}
        width={'auto'}
        onClick={(): void => setImageListModalVisible(true)}>Show Image List Modal</SimpleButton>
      <ImageList
        onClose={(): void => setImageListModalVisible(false)}
        visible={imageListModalVisible}
      />
      <p></p>
      <SimpleButton
        icon={'visibility'}
        width={'auto'}
        onClick={(): void => setChangePasswordModalVisible(true)}>Show Change Password Modal</SimpleButton>
      <ChangePassword
        onClose={(): void => setChangePasswordModalVisible(false)}
        visible={changePasswordModalVisible}
      />
      <br />
      <br />
      <br />


      <TitleText>Card</TitleText>
      <p></p>
      <IconCard text={'Card title with long text for testing purposes'} />
      <p></p>
      <IconCard
        text={'Card title with long text for testing purposes'}
        disabled
      />
      <p></p>
      <IconCard
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
      />
      <p></p>
      <IconCard
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        disabled
      />
      <p></p>
      <IconCard
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        icon={'group'}
      />
      <p></p>
      <IconCard
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        icon={'group'}
        disabled
      />
      <p></p>
      <ImageCard
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        secondaryText={'Card title with long text for testing purposes'}
        image={''}
        active
      />
      <p></p>
      <ImageCard
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        secondaryText={'Card title with long text for testing purposes'}
        icon={'group'}
      />
      <p></p>
      <ImageCard
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
      />
      <p></p>
      <ImageCard loading />
      <br />
      <br />
      <br />


      <TitleText>List</TitleText>
      <p></p>
      <List loading={false} cards={[
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          link: '',
          active: false
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          image: '',
          active: true
        }
      ]} />
      <br />
      <br />
      <br />


      <TitleText>Form Fields</TitleText>
      <p></p>
      <FormField label={'Hello Label:'}>
        <Input icon={'group'} width={'calc(100% / 3 - 32px)'} />
        <Input icon={'group'} width={'calc(100% / 3 - 32px)'} />
        <Input icon={'group'} width={'calc(100% / 3 - 32px)'} />
        <SimpleButton icon={'group'} />
      </FormField>

      <FormField label={'Hello Label:'}>
        <Input icon={'group'} width={'calc(100% / 3 - 10.67px)'} />
        <Input icon={'group'} width={'calc(100% / 3 - 10.67px)'} />
        <Dropdown
          width={'calc(100% / 3 - 10.67px)'}
          name={'Dropdown'}
          values={[
            { name: 'value', value: 'name' }
          ]}
          icon={'group'}
          onChange={(): void => { }}
        />
      </FormField>
      <br />
      <br />
      <br />


      <TitleText>Text Editor</TitleText>
      <p></p>
      <TextArea label={'Blog body:'} />
      <p></p>
      <TextArea label={'Blog body:'} disabled />
      <p></p>
      <TextArea label={'Blog body:'} error={'some error to fix.'} />
      <br />
      <br />
      <br />


      <TitleText>Text Editor</TitleText>
      <p></p>
      <Renderer source={md} />
      <br />
      <br />
      <br />

      <Banner text={'Already exists an user with the provided email'} icon={'check'} color={COLOR_GREEN} visible />
    </>
  );
};

interface IPlaygroundPage { }
