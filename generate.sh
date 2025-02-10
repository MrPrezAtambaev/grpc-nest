#!/bin/bash
protoc -I=. ./proto/*.proto \
 --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
 --ts_proto_out=./libs/common/src/ \
 --ts_proto_opt=outputServices=grpc-js \
 --ts_proto_opt=esModuleInterop=true \
 --ts_proto_opt=nestJs=true