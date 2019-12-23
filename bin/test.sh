#!/bin/sh

set -eux

cd "$(dirname "$0")/.."

grep -v assertIsDefined example/dist/main.js
