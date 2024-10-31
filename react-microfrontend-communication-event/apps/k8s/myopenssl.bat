echo [req] > myopenssl.config
echo default_bits              = 2048 >> myopenssl.config
echo req_extensions            = extension_requirements >> myopenssl.config
echo distinguished_name        = dn_requirements >> myopenssl.config
echo prompt                    = no >> myopenssl.config
echo [extension_requirements] >> myopenssl.config
echo basicConstraints          = CA:FALSE >> myopenssl.config
echo keyUsage                  = nonRepudiation, digitalSignature, keyEncipherment >> myopenssl.config
echo subjectAltName            = @sans_list >> myopenssl.config
echo [dn_requirements] >> myopenssl.config
echo countryName               = Country Name (2 letter code) >> myopenssl.config
echo stateOrProvinceName       = State or Province Name (full name) >> myopenssl.config
echo localityName              = Locality Name (eg, city) >> myopenssl.config
echo 0.organizationName        = Organization Name (eg, company) >> myopenssl.config
echo organizationalUnitName    = Organizational Unit Name (eg, section) >> myopenssl.config
echo commonName                = Common Name (e.g. server FQDN or YOUR name) >> myopenssl.config
echo emailAddress              = Email Address >> myopenssl.config
echo [sans_list] >> myopenssl.config
echo DNS.1                     = sumangcodes.info >> myopenssl.config
echo DNS.2                     = product-catalog.sumangcodes.info >> myopenssl.config
echo DNS.3                     = shopping-cart.sumangcodes.info >> myopenssl.config
echo DNS.4                     = container-app.sumangcodes.info >> myopenssl.config
echo DNS.5                     = www.sumangcodes.info >> myopenssl.config
