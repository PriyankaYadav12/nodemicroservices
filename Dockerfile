FROM node:18
WORKDIR /test
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start 
