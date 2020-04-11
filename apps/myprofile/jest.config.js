module.exports = {
  name: 'myprofile',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/myprofile',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
