# How to set up react native in linux

## 1. Download Android Studio
-------------------------------------------------

## 2. Install nautilus
-------------------------------

` sudo add-apt-repository ppa:gnome3-team/gnome3`

` sudo apt-get update && sudo apt-get install nautilus`


## 3. Install Android SDK
-----------------------------------------

#### Check following in SDK platforms

-  Intel x86 Atom_64 System Image
- Google APIs Intel x86 Atom System Image


## 4. Create Destkop Entry
--------------------------------------------


## 5. Configure the ANDROID_HOME environment variable
--------------------------------------------------------------------------------------------
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
## 6. Install Emulator
----------------------------------
...
### If errors:

#### Failed to construct transformer
 ```solution is to upgrade or downgrade node js version using nvm  ```

- Install nvm by :
``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash 
  nvm install 15.0.0
  nvm use 15.0.0```
