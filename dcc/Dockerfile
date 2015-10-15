FROM node:4.2

RUN npm install -g sails grunt bower


#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

#RUN mkdir /server
#WORKDIR /server

WORKDIR /opt

#COPY package.json /usr/src/app/
#COPY package.json /opt


#COPY app /usr/src/app
COPY . /opt

RUN npm install



#CMD [ "npm", "start" ]



#VOLUME ["/server"]
VOLUME ["/opt"]


EXPOSE 1337
