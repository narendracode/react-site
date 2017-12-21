#!/usr/bin/expect
set timeout 20
set user $USER
set password $PASSWORD
set ip "webexpressive.com"

spawn ssh $user@$ip

# Look for passwod prompt
expect "*?assword:*"
send -- "$password\r"

send -- "sudo su\r"

expect "*?assword"
send -- "$password\r"

send -- "cd /var/www/html/react-site && git pull\r"


send -- "\r"
expect eof