import React from 'react';

import { Input } from '../../components/input';
import { Banner } from '../../components/banner';
import { Card } from '../../components/card';
import { Dropdown } from '../../components/dropdown';
import { Image } from '../../components/image';
import { Toggle } from '../../components/toggle';
import { Text } from '../../components/text';
import { Button } from '../../components/button';
import { Loading } from '../../components/loading';
import { List } from '../../components/list';
import { FormField } from '../../components/form-field';
import { Editor } from '../../components/editor';
import { Renderer } from '../../components/renderer';
import { UpdateImage, IUpdateImageResult } from '../../components/update-image';
import { ImageList } from '../../components/image-list';

import { COLOR_GREEN, COLOR_PURPLE } from '../../lib/values';

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


export const LandingBlogPage: React.FC<{}> = () => {
  const [image, setImage] = React.useState<string>('https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg');
  const [imageListModalVisible, setImageListModalVisible] = React.useState<boolean>(false);
  const [loadingModalVisible, setLoadingModalVisible] = React.useState<boolean>(false);
  const [md, setMD] = React.useState<string>(string);
  const [updateImageModalVisible, setUpdateImageModalVisible] = React.useState<boolean>(false);

  return (
    <>
      <Text type={'title'}>Input</Text>
      <p></p>
      <Input icon={'group'} label={'Name:'} />
      <p></p>
      <Input icon={'group'} label={'Name:'} value={'Pablo Navarro'} disabled />
      <br />
      <br />
      <br />


      <Text type={'title'}>Dropdown</Text>
      <p></p>
      <Dropdown
        name={'Dropdown'}
        label={'Year:'}
        items={[]}
        icon={'group'}
        onChange={(): void => { }}
      />
      <p></p>
      <Dropdown
        name={'Dropdown'}
        label={'Year:'}
        items={[
          { name: 'value', value: 'name' }
        ]}
        icon={'group'}
        onChange={(): void => { }}
      />
      <p></p>
      <Dropdown
        name={'Dropdown'}
        label={'Year:'}
        items={[
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
        label={'Year:'}
        items={[]}
        icon={'group'}
        onChange={(): void => { }}
        disabled
      />
      <br />
      <br />
      <br />


      <Text type={'title'}>Image</Text>
      <p></p>
      <Image type={'circle'} onUpdateClick={(): void => setUpdateImageModalVisible(true)} src={image} updatable />
      <p></p>
      <Image type={'square'} onUpdateClick={(): void => setUpdateImageModalVisible(true)} src={image} updatable />
      <UpdateImage
        visible={updateImageModalVisible}
        onClose={(result: IUpdateImageResult | null): void => {
          setImage(result ? result.base64 : image);
          setUpdateImageModalVisible(false);
        }}
        src={image} />
      <br />
      <br />
      <br />


      <Text type={'title'}>Toggle</Text>
      <p></p>
      <Toggle label={'Active:'} disabled />
      <p></p>
      <Toggle label={'Active:'} />
      <br />
      <br />
      <br />


      <Text type={'title'}>Button</Text>
      <p></p>
      <Button type={'color'} text={'Hello'} width={'auto'} color={COLOR_PURPLE} icon={'group'} />
      <p></p>
      <Button type={'color'} text={'Hello'} width={'auto'} icon={'group'} />
      <p></p>
      <Button type={'color'} icon={'group'} />
      <p></p>
      <Button type={'color'} text={'Hello'} width={'auto'} icon={'group'} disabled />
      <p></p>
      <Button type={'color'} icon={'group'} disabled />
      <p></p>
      <Button type={'color'} shape={'circle'} text={'Hello'} color={COLOR_PURPLE} icon={'group'} />
      <p></p>
      <Button type={'color'} shape={'circle'} text={'Hello'} icon={'group'} />
      <p></p>
      <Button type={'color'} shape={'circle'} color={COLOR_PURPLE} icon={'group'} />
      <p></p>
      <Button type={'color'} shape={'circle'} text={'Hello'} icon={'group'} disabled />
      <p></p>
      <Button type={'color'} shape={'circle'} icon={'group'} disabled />
      <p></p>
      <Button type={'menu'} text={'Hello'} icon={'group'} />
      <p></p>
      <Button type={'menu'} text={'Hello'} icon={'group'} active />
      <p></p>
      <Button type={'menu'} shape={'circle'} text={'Hello'} icon={'group'} />
      <p></p>
      <Button type={'menu'} shape={'circle'} text={'Hello'} icon={'group'} active />
      <p></p>
      <Button type={'text'} text={'Hello'} icon={'group'} />
      <p></p>
      <Button type={'text'} text={'Hello'} icon={'group'} disabled />
      <p></p>
      <Button type={'text'} text={'Hello'} />
      <p></p>
      <Button type={'text'} text={'Hello'} disabled />
      <br />
      <br />
      <br />


      <Text type={'title'}>Modal</Text>
      <p></p>
      <Button
        icon={'visibility'}
        text={'Show Loading Modal'}
        type={'color'}
        width={'auto'}

        onClick={(): void => setLoadingModalVisible(true)}
      />
      <Loading
        text={'Adding new user...'}
        visible={loadingModalVisible}
      />
      <p></p>
      <Button
        icon={'visibility'}
        text={'Show Image List Modal'}
        type={'color'}
        width={'auto'}

        onClick={(): void => setImageListModalVisible(true)}
      />
      <ImageList
        onClose={(): void => setImageListModalVisible(false)}
        visible={imageListModalVisible}
      />
      <br />
      <br />
      <br />


      <Text type={'title'}>Card</Text>
      <p></p>
      <Card
        text={'Card title with long text for testing purposes'}
        type={'icon'}
      />
      <p></p>
      <Card
        text={'Card title with long text for testing purposes'}
        type={'icon'}
        disabled
      />
      <p></p>
      <Card
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        type={'icon'}
      />
      <p></p>
      <Card
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        type={'icon'}
        disabled
      />
      <p></p>
      <Card
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        type={'icon'}
        icon={'group'}
      />
      <p></p>
      <Card
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        type={'icon'}
        icon={'group'}
        disabled
      />
      <p></p>
      <Card
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        secondaryText={'Card title with long text for testing purposes'}
        type={'image'}
        image={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'}
        active
      />
      <p></p>
      <Card
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        secondaryText={'Card title with long text for testing purposes'}
        icon={'group'}
        type={'image'}
      />
      <p></p>
      <Card
        title={'Card title with long text for testing purposes'}
        text={'Card title with long text for testing purposes'}
        type={'image'}
      />
      <br />
      <br />
      <br />


      <Text type={'title'}>List</Text>
      <p></p>
      <List cards={[
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: false
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: true
        },
        {
          title: 'Card title with long text for testing purposes',
          text: 'Card title with long text for testing purposes',
          secondaryText: 'Card title with long text for testing purposes',
          type: 'image',
          image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
          active: true
        }
      ]} />
      <br />
      <br />
      <br />


      <Text type={'title'}>Form Fields</Text>
      <p></p>
      <FormField label={'Hello Label:'} marginBottom>
        <Input icon={'group'} width={'33%'} />
        <Input icon={'group'} width={'33%'} />
        <Input icon={'group'} width={'33%'} />
        <Button type={'color'} icon={'group'} />
      </FormField>

      <FormField label={'Hello Label:'} marginBottom>
        <Input icon={'group'} />
        <Input icon={'group'} />
        <Dropdown
          name={'Dropdown'}
          items={[
            { name: 'value', value: 'name' }
          ]}
          icon={'group'}
          onChange={(): void => { }}
        />
      </FormField>
      <br />
      <br />
      <br />


      <Text type={'title'}>Text Editor</Text>
      <p></p>
      <Editor label={'Blog body:'} text={''} onTextChange={(text: string): void => setMD(text)} />
      <br />
      <br />
      <br />


      <Text type={'title'}>Text Editor</Text>
      <p></p>
      <Renderer source={md} />
      <br />
      <br />
      <br />

      <Banner text={'Already exists an user with the provided email'} icon={'check'} color={COLOR_GREEN} visible />
    </>
  );
};
