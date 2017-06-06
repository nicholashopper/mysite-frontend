FROM ubuntu:latest

MAINTAINER Nicholas Hopper

ENV HOMEDIR=/home

RUN apt-get update && apt-get install npm
RUN npm init -y
RUN npm install --save babel-core
RUN npm install --save babel-preset-latest
RUN npm install --save babel-preset-react
RUN npm install --save webpack babel-loader
