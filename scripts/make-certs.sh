#!/bin/bash

# deleting old certs
rm -rf certificates

# creating new certs
mkdir certificates
cd certificates

# create a temporary file for the OpenSSL configuration
OPENSSL_CONF=$(mktemp)
cat > "$OPENSSL_CONF" <<-EOF
[dn]
CN=localhost
[req]
distinguished_name = dn
[EXT]
subjectAltName=DNS:localhost
keyUsage=digitalSignature
extendedKeyUsage=serverAuth
EOF

# generate a self-signed certificate and key
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config "$OPENSSL_CONF" \
  -days 3650


# remove the temporary OpenSSL configuration file
rm "$OPENSSL_CONF"
