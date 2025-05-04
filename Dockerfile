FROM mcr.microsoft.com/devcontainers/javascript-node:22

RUN pwd
WORKDIR /app
RUN pwd

ARG VITE_LOGIN_API_URL
ARG VITE_REGISTRATION_API_URL
ENV VITE_LOGIN_API_URL=$VITE_LOGIN_API_URL
ENV VITE_REGISTRATION_API_URL=$VITE_REGISTRATION_API_URL

COPY ./app/package*.json ./
RUN npm ci

EXPOSE 3000

COPY ./app/ ./
CMD ["npm", "run", "dev"]

