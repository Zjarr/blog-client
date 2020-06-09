import React from 'react';

import { Input } from '../../components/input';
import { Banner } from '../../components/banner';
import { Dropdown } from '../../components/dropdown';
import { Image } from '../../components/image';
import { Toggle } from '../../components/toggle';
import { Text } from '../../components/text';
import { Button } from '../../components/button';

import { COLOR_GREEN, COLOR_PURPLE } from '../../lib/values';

export const LandingBlogPage: React.FC<{}> = () => {
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
      <Image type={'circle'} updatable />
      <p></p>
      <Image type={'square'} updatable />
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


      <Banner text={'Already exists an user with the provided email'} icon={'check'} color={COLOR_GREEN} visible />
    </>
  );
};
