module.exports = {
  packagerConfig: {
    asar: true,
    icon: './drive.ico'
  },
  rebuildConfig: {},
  makers: [
   {
      name: '@electron-forge/maker-dmg',
      config: {
      icon: './drive.ico',
      format: "ULFO"}
      },
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
