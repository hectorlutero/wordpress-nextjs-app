FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
    build-essential mariadb-client openssh-client libmcrypt-dev libpng-dev tzdata imagemagick unzip zip wget sqlite3 libcurl4-openssl-dev pkg-config libssl-dev gcc make autoconf libc-dev pkg-config libmagickwand-dev --no-install-recommends \
    && cp -R /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
    && echo "America/Sao_Paulo" > /etc/timezone

RUN docker-php-ext-install pdo_mysql tokenizer

RUN apt-get update && apt-get install -y \
   libfreetype6-dev \
   libjpeg62-turbo-dev \
   libmcrypt-dev \
   libpng-dev \
   && docker-php-ext-install -j$(nproc) iconv zip bcmath \
   && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
   && docker-php-ext-install -j$(nproc) gd \
   && pecl install imagick \
   && docker-php-ext-enable imagick 

RUN apt-get install nano supervisor git zip -y

RUN apt-get install -y nginx  && \
    rm -rf /var/lib/apt/lists/*