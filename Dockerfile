FROM nimmis/ubuntu:16.04

MAINTAINER narendra <narendrasoni2@gmail.com>

# disable interactive functions
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
apt-get install -y apache2  && \
rm -rf /var/lib/apt/lists/*

# add apache2 service to supervisor
ADD supervisor/conf.d/apache2.conf /etc/supervisor/conf.d/


RUN mkdir -p /var/www/html/react-site

ADD 000-default.conf /etc/apache2/sites-available/
ADD 000-default.conf /etc/apache2/sites-enabled/

COPY public /var/www/html/react-site/public

RUN apachectl restart


EXPOSE 80