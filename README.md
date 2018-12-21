# Ritocoin Message Verification and Signing for Ritocore




ritocore-message adds support for verifying and signing ritocoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main ritocore repo](https://github.com/traysi/ritocore) for more information.

## Getting Started

```sh
npm install ritocore-message
```

```sh
bower install ritocore-message
```

To sign a message:

```javascript
var ritocore = require('ritocore-lib');
var Message = require('ritocore-message');

var privateKey = ritocore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'RGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/traysi/ritocore/blob/master/CONTRIBUTING.md) on the main ritocore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/traysi/ritocore/blob/master/LICENSE).
