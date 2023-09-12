FROM php:8.1-fpm-alpine3.17

RUN apk update && apk add apache2 apache2-proxy shadow libpq-dev supervisor

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

RUN groupadd -g 1000 www && \
    useradd -s /bin/bash -u 1000 -N -g www -K MAIL_DIR=/dev/null -d /var/www www

WORKDIR /var/www/gic-dx-companyhousing

ADD . /var/www/gic-dx-companyhousing
ADD ./.conf/apache/httpd.conf /etc/apache2/httpd.conf
ADD ./.conf/apache/conf.d/server.conf /etc/apache2/conf.d/server.conf
ADD ./.conf/php/8.1/php-fpm.d/www.conf /usr/local/etc/php-fpm.d/zzz-www.conf
ADD ./.conf/php/8.1/php.ini /usr/local/etc/php/conf.d/my-app.ini
ADD ./.conf/supervisor/supervisord.conf /etc/supervisord.conf
ADD ./.conf/supervisor/supervisor.d/ /etc/supervisor.d/

RUN mkdir -p /run/php-fpm8.1

RUN chown www:www -R /run/php-fpm8.1 && \
    chown www:www -R /var/www && \
    chown www:www /etc/apache2/httpd.conf && \
    chown www:www /etc/apache2/conf.d/server.conf

CMD ["/usr/bin/supervisord"]