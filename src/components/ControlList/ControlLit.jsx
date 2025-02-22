import {
  DatabaseOutlined,
  FileDoneOutlined,
  ClusterOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Подключение к серверу

export const MenuList = () => {
  const [menuData, setMenuData] = useState({
    messages: '',
    devices: '',
    data: '',
    time: '',
  });

  useEffect(() => {
    socket.on('menuDataUpdate', data => {
      setMenuData(data);
    });
    return () => {
      socket.off('menuDataUpdate');
    };
  }, []);

  const items = [
    {
      key: 'messages',
      icon: <FileDoneOutlined />,
      label: 'TOTAL MESSAGES',
      value: menuData.messages,
    },
    {
      key: 'devices',
      icon: <ClusterOutlined />,
      label: 'TOTAL DEVICES',
      value: menuData.devices,
    },
    {
      key: 'data',
      icon: <DatabaseOutlined />,
      label: 'DATABASE VOLUME',
      value: menuData.data,
    },
    {
      key: 'time',
      icon: <ClockCircleOutlined />,
      label: 'UPTIME',
      value: menuData.time,
    },
  ];

  return (
    <Menu theme="dark">
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}: {item.value}
        </Menu.Item>
      ))}
    </Menu>
  );
};
