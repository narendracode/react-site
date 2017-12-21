#!/usr/bin/expect
set timeout 20
set user $USER

set ip "webexpressive.com"

spawn ssh -oIdentityFile=/key/key.pem $user@$ip

send -- "cd /var/www/html/react-site\r"
send -- "git pull\r"

send -- "\r"
expect eof
