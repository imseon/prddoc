#!/bin/sh

PROJECT_NAME=`node -e "const manifest = require('./manifest.json'); console.log(manifest.name);"`
echo ${PROJECT_NAME}
