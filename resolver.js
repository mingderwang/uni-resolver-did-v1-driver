/*!
 * Copyright (c) 2020 Veres One Project. All rights reserved.
 */
'use strict';

const express = require('express');
const didIo = require('did-io');

// Config did-io to use did:key and did:v1 drivers
didIo.use('key', require('did-method-key').driver());
didIo.use('v1', require('did-veres-one').driver({mode: 'test'}));

const app = express();

app.get('/1.0/identifiers/*', handleResolveDid);

app.server = app.listen(8080, () => {
  console.log("Veres One DID Resolver listening on port 8080.");
});

/**
 * Express middleware handler for Universal DID Resolver driver.
 * @param {IncomingRequest} req
 * @param {ServerResponse} res
 * @returns {Promise}
 */
async function handleResolveDid(req, res) {
  try {
    const did = parseDid(req.url);

    console.log('Resolving:', did);

    res
      .type('application/ld+json')
      .send(await didIo.get({did}));
  } catch(error) {
    handleError(error, res);
  }
}

/**
 * Parses a DID string from incoming resolver url.
 * @param {string} url
 * @throws {Error}
 * @returns {string}
 */
function parseDid(url) {
  const RE_DID = /\/1.0\/identifiers\/(?<did>.*)/;
  const {groups: {did}} = RE_DID.exec(url);

  if(!did || !did.startsWith('did:')) {
    throw new Error(`Invalid DID: ${did}`);
  }

  return did;
}

function handleError(error, res) {
  console.error(error);
  res.status(400).type('text/plain').send(error.message + '\n');
}

module.exports = app;
