import type { Schema, Struct } from '@strapi/strapi';

export interface SocialsSocials extends Struct.ComponentSchema {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'text_icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'socials.socials': SocialsSocials;
    }
  }
}
