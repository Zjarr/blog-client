import MarkdownIt from 'markdown-it';
import React from 'react';

import { RendererContainer } from './style.renderer.components';

export const Renderer: React.FC<IRenderer> = ({ source }) => {
  const md = new MarkdownIt().set({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  });

  return (
    <RendererContainer dangerouslySetInnerHTML={{ __html: md.render(source) }} />
  );
};

interface IRenderer {
  source: string;
}
