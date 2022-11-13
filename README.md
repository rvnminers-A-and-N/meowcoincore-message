# Meowcoin Message Verification and Signing for Meowcoincore




meowcoincore-message adds support for verifying and signing meowcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main meowcoincore repo](https://github.com/rvnminers-A-and-N/meowcoincore) for more information.

## Getting Started

```sh
npm install meowcoincore-message
```

```sh
bower install meowcoincore-message
```

To sign a message:

```javascript
var meowcoincore = require('meowcoincore-lib');
var Message = require('meowcoincore-message');

var privateKey = meowcoincore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'RGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/rvnminers-A-and-N/meowcoincore/blob/master/CONTRIBUTING.md) on the main meowcoincore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/rvnminers-A-and-N/meowcoincore/blob/master/LICENSE).
