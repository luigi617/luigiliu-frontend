# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . ./

# Build the React app for production
RUN npm run build

# Stage 2: Prepare build artifacts for sharing
FROM alpine:latest

WORKDIR /code

# Install necessary tools
RUN apk add --no-cache bash

# Create directory for static files
RUN mkdir -p /code/frontend

# Copy build files from the build stage to the shared volume
COPY --from=build /app/build /code/frontend

# Keep the container running to maintain the volume
CMD ["tail", "-f", "/dev/null"]
