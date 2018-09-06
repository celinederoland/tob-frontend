FROM php:7.2-apache
RUN apt-get update && apt-get install -y libssl-dev && rm -rf /var/lib/apt/lists/*
RUN apt-get install pkg-config

COPY virtualhost.conf /etc/apache2/sites-available/000-default.conf
COPY apache2.conf /etc/apache2/apache2.conf
WORKDIR /var/www/html/public
RUN a2enmod rewrite
RUN service apache2 restart