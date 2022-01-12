---
title: 给X3刷code增加蓝牙播放功能
comments: true
date: 2021-05-23 22:05:15
tags: Technology
categories: Technology
---

# 利用Bimmercode给X3 F25刷机

苦于我的X3能蓝牙连接手机打电话，但是不能播放音乐，于是买了Bimmercode和OBD无线
连接器，自己刷机，过程还是很简单，而且还能省钱，具体需要改的参数如下。

只做参考，有任何问题概不负责。

In HEADUNIT Menu...go into Expert mode then 3003_Telefon_Telematik_Online

Turn these to "Aktiv" :
CDMM_Bluetooth_Audio
CDMM_BT_DATABASE
AUDIO_PLAYER_ON_OFF
BT_MODUL_ON_OFF
A2DP_PROFILE


In COMIBOX Menu....go into Expert mode then 3004_Bluetooth_Parameter and turn this to "Aktiv" :
A2DP_AVRCP_EIN_AUS
