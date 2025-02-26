//import React from "react"
import { TbMessageCheck } from 'react-icons/tb';
import { PiDevicesFill } from 'react-icons/pi';
import { AiFillDatabase } from 'react-icons/ai';
import { IoMdTime } from 'react-icons/io';
export const StatusData = [
  {
    icon: <TbMessageCheck />,
    title: 'Total Message',
    data: '',
    backgroundIconColor: 'red',
    backgroundColor: 'red',
  },
  {
    icon: <PiDevicesFill />,
    title: 'Total Devices',
    data: '',
    backgroundIconColor: 'red',
    backgroundColor: 'blue',
  },
  {
    icon: <AiFillDatabase />,
    title: 'DataBase Volume',
    data: '',
    backgroundIconColor: 'red',
    backgroundColor: 'green',
  },
  {
    icon: <IoMdTime />,
    title: 'Uptime',
    data: '',
    backgroundIconColor: 'red',
    backgroundColor: 'orange',
  },
];
