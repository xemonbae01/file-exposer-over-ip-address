#!/bin/bash
# Tested on a virtual Android environment; may not work on all physical Android devices.
# Use at your own risk. This setup may be detectable depending on your environment.
pkg update -y
pkg upgrade -y
pkg install x11-repo -y
pkg update -y
pkg install tigervnc git python -y

VNC_PASSWORD="xemonbae01"

mkdir -p $HOME/.vnc
echo $VNC_PASSWORD | vncpasswd -f > $HOME/.vnc/passwd
chmod 600 $HOME/.vnc/passwd

vncserver :1 -geometry 1080x1920 -depth 24 -passwd $HOME/.vnc/passwd

cd $HOME
if [ ! -d "noVNC" ]; then
    git clone https://github.com/novnc/noVNC.git
fi
cd noVNC

./utils/launch.sh --vnc localhost:5901 --listen 8080
