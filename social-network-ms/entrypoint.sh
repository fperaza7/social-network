#!/bin/bash

set -e

SERVICE_NAME=$1

if [ -z "$SERVICE_NAME" ]; then
  echo "SERVICE_NAME not provided."
  exit 1
fi

echo "Installing dependencies..."
npm install

echo "Running migrations for $SERVICE_NAME..."
npm run typeorm:$SERVICE_NAME -- migration:run

echo "Running seeders for $SERVICE_NAME..."
npm run seed:$SERVICE_NAME

echo "Starting $SERVICE_NAME service..."
npm run start:$SERVICE_NAME
