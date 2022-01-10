FROM node:16.13
WORKDIR /kcpserver
ADD . /kcpserver
EXPOSE 3002
RUN npm install
CMD node server/express/express.js