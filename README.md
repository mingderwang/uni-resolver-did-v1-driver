# Universal Resolver Veres-One DID Driver _(uni-resolver-did-v1-driver)_

> Veres-One DID Driver for the DIF [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/), for `did:v1` identifiers.

## Table of Contents

- [Specifications](#specifications)
- [Example DIDs](#example-dids)
- [Build and Run](#build-and-run)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

## Specifications

The following DID methods are supported:

* `did:v1` - [Veres One DID Method](https://w3c-ccg.github.io/did-method-v1/)
* `did:key` - [did:key DID Method](https://w3c-ccg.github.io/did-method-key/)

## Example DIDs

Veres One Testnet:

```
did:v1:test:nym:z6Mkmpe2DyE4NsDiAb58d75hpi1BjqbH6wYMschUkjWDEEuR
did:v1:test:nym:z6MkesAjEQrikUeuh6K496DDVm6d1DUzMMGQtFHuRFM1fkgt
```

`did:key` DIDs:

```
did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH
```

## Build and Run

Docker:

```
docker run -p 8080:8080 universalresolver/uni-resolver-did-v1-driver
docker build -f ./Dockerfile . -t universalresolver/uni-resolver-did-v1-driver
```

Native, with Node 10:

```
npm install
npm start
```

To test with `curl`:

```
curl -v "http://localhost:8080/1.0/identifiers/did:v1:test:nym:z6Mkmpe2DyE4NsDiAb58d75hpi1BjqbH6wYMschUkjWDEEuR"

curl "http://localhost:8080/1.0/identifiers/did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH" | python -m json.tool
```

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

Note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[New BSD License (3-clause)](LICENSE) © Digital Bazaar
