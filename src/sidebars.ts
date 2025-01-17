import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    'docs/README',
    { type: 'autogenerated', dirName: 'docs/get-started' },
    {
      type: 'link',
      label: 'Concepts',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'docs/concepts' },
    {
      type: 'link',
      label: 'Recipes',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'docs/recipes' },
    {
      type: 'link',
      label: 'References',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'docs/references' },
  ],
  quickStartSidebar: [
    'quick-starts/README',
    {
      type: 'link',
      label: 'Language framework',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'quick-starts/framework' },
    {
      type: 'link',
      label: 'No framework and generic',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'quick-starts/generic' },
    {
      type: 'link',
      label: 'Database',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'quick-starts/database' },
  ],
  integrationsSidebar: [
    'integrations/README',
    {
      type: 'link',
      label: 'Social connectors',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/social' },
    {
      type: 'link',
      label: 'Email connectors',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/email' },
    {
      type: 'link',
      label: 'SMS connectors',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/sms' },
    {
      type: 'link',
      label: 'Enterprise connectors',
      customProps: { additionalLabel: '(SP-initiated SSO)' },
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/sso' },
    {
      type: 'link',
      label: 'Third-party apps',
      customProps: { additionalLabel: '(Logto as Idp)' },
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/third-party' },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

export default sidebars;
