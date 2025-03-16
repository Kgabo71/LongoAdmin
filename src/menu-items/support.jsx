// assets
import {  SettingOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
   SettingOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: '',
  type: 'group',
  children: [
    {
      id: 'Settings',
      title: 'Settings',
      type: 'item',
      url: '/sample-page',
      icon: icons. SettingOutlined
    },
 
  ]
};

export default support;
