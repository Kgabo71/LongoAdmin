// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
SwapOutlined,
UserOutlined,
ShopOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
SwapOutlined,
ShopOutlined,
UserOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: '',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Bidding',
      type: 'item',
      url: '/typography',
      icon: icons.SwapOutlined
    },
    {
     id: 'users',
         title: 'Users',
         type: 'item',
         url: '/color',
         icon: icons.UserOutlined,
         target: true
       },
    {
    id: 'serviceProviders',
       title: 'Service Providers',
       type: 'item',
       url: '/shadow',
       icon: icons.ShopOutlined,
       target: true
     }
  ]
};

export default utilities;
