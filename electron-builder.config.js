if (process.env.VITE_APP_VERSION === undefined) {
  const now = new Date()
  process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${
    now.getUTCMonth() + 1
  }.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'com.toimc.community.app',
  copyright: 'Copyright © 2021 Toimc',
  directories: {
    output: 'dist',
    buildResources: 'buildResources'
  },
  files: ['packages/**/dist/**'],
  extraMetadata: {
    version: process.env.VITE_APP_VERSION
  },
  productName: 'toimc技术社区',
  dmg: {
    background: 'buildResources/background.tiff'
  },
  mac: {
    category: 'public.app-category.lifestyle',
    target: 'dmg'
  },
  win: {
    target: ['nsis', 'zip']
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    shortcutName: 'toimc技术社区'
  },
  linux: {
    target: ['deb', 'tar.xz'],
    category: 'Office',
    executableName: 'toimc-community',
    icon: 'buildResources/icon.png'
  }
}

module.exports = config
