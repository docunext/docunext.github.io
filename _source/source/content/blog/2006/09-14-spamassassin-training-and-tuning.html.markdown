---
title: SpamAssassin Training and Tuning
date: 2006-09-14
tags: spam
---
Resources:

http://wiki.apache.org/spamassassin/

http://www.agentbob.info/agentbob/g3/57.html

http://wiki.apache.org/spamassassin/CustomRulesets

http://rulesemporium.com/++++++++++local.cf

To configure SpamAssassin to use Bayesian analysis we need to add this line:

use_bayes 1   1. Enable Bayes auto-learning

bayes_auto_learn 1++++++++++sa-learn

sa-learn - train SpamAssassin's Bayesian classifier

To show sa-learn spam:

sa-learn --spam --mbox --showdots /var/vmail/$domain/$user/.Spam/

To show sa-learn ham (not spam):

sa-learn --ham --mbox --showdots /var/vmail/$domain/$user/.maildir/cur/

If at any time you accidentally classify a message incorrectly this can be corrected. Move the message to a temporary folder, then use the command

sa-learn --forget --mbox ~/Mail/temp

Due to spam being constantly evolving, it's required that we show SA new spam and fill the database up with everything we have. The database can get large, but this is not a concern for us at this time.++++++++++.spamassassin/user_prefs (reccomended)

header RCVD_IN_RFC_PM eval:check_rbl('relay', 'postmaster.rfc-ignorant.org.')

describe RCVD_IN_RFC_PM Received via a relay in postmaster.rfc-ignorant.org

score RCVD_IN_RFC_PM 2.0

header X_CHINESE_RELAY eval:check_rbl('relay', 'cn.rbl.cluecentral.net.')

describe X_CHINESE_RELAY Received via a relay in China

score X_CHINESE_RELAY 1.5

header X_KOREAN_RELAY eval:check_rbl('relay', 'korea.services.net.')

describe X_KOREAN_RELAY Received via a relay in Korea

score X_KOREAN_RELAY 1.5

header X_MONKEY_FORMMAIL eval:check_rbl('relay', 'formmail.relays.monkeys.com.')

describe X_MONKEY_FORMMAIL Received via relay in monkeys.com's open formmail scripts list

score X_MONKEY_FORMMAIL 1.5 header X_MONKEY_PROXY eval:check_rbl('relay', 'proxies.relays.monkeys.com.')

describe X_MONKEY_PROXY Received via relay in monkeys.com's open proxy list

score X_MONKEY_PROXY 1.5

header X_MONKEY_PROXY eval:check_rbl('relay', 'spamhaus.relays.osirusoft.com.')

describe X_MONKEY_PROXY Received via relay in Spamhaus Blacklist

score X_MONKEY_PROXY 1.5   1. Not Just Another BlackList tests from http://njabl.org/use.html

header IN_NJABL_ORG rbleval:check_rbl('njabl','dnsbl.njabl.org.')

describe IN_NJABL_ORG Received via a relay in dnsbl.njabl.org

tflags IN_NJABL_ORG net

header NJABL_OPEN_RELAY rbleval:check_rbl_results_for('njabl', '127.0.0.2')

describe NJABL_OPEN_RELAY DNSBL: sender is Confirmed Open Relay

tflags NJABL_OPEN_RELAY net

header NJABL_DUL rbleval:check_rbl_results_for('njabl', '127.0.0.3')

describe NJABL_DUL DNSBL: sender ip address in in a dialup block

tflags NJABL_DUL net

header NJABL_SPAM_SRC rbleval:check_rbl_results_for('njabl', '127.0.0.4')

describe NJABL_SPAM_SRC DNSBL: sender is Confirmed Spam Source

tflags NJABL_SPAM_SRC net

header NJABL_MULTI_STAGE rbleval:check_rbl_results_for('njabl', '127.0.0.5')

describe NJABL_MULTI_STAGE DNSBL: sent through multi-stage open relay

tflags NJABL_MULTI_STAGE net

header NJABL_CGI rbleval:check_rbl_results_for('njabl', '127.0.0.8')

describe NJABL_CGI DNSBL: sender is an open formmail

tflags NJABL_CGI net

header NJABL_PROXY rbleval:check_rbl_results_for('njabl', '127.0.0.9')

describe NJABL_PROXY DNSBL: sender is an open proxy

tflags NJABL_PROXY net

score IN_NJABL_ORG 0.38

score NJABL_DUL 0.62

score NJABL_MULTI_STAGE 0.75

score NJABL_PROXY 3.00

score NJABL_OPEN_RELAY 3.00

score NJABL_CGI 1.50

score NJABL_SPAM_SRC 3.00

Trying to get more results:"DCC, Pyzor, Razor2

Spams, by and large, get distributed to lots of people with little or no modification. The DCC, Pyzor, and Razor projects attempt to cash in on this fact by asking people to submit a message to a central database once it has been identified as spam. If I identify a message as spam at 8:45am, I'll submit it to one of these databases. When you read the same message sent to you at 9:10am, Spamassassin asks that database, "Has anyone submitted this message as spam?". The database responds, "I'm 70% sure it is because someone reported it", and now its spam likelihood goes up."

<pre>
emerge dcc razor pyzor

razor-admin -create+++++local.cf#Enable network checks

use_razor2              1

use_dcc                 1

use_pyzor               1+++++/etc/mail/spamassassin/v310.pre# DCC - perform DCC message checks.## DCC is disabled here because it is not open source.  See the DCC# license for more details.#

loadplugin Mail::SpamAssassin::Plugin::DCC# Razor2 - perform Razor2 message checks.## Razor2 is disabled here because it is not available for unlimited free# use.  It is currently free for personal use, subject to capacity# constraints.  See the Cloudmark SpamNet Service Policy for more details.#

loadplugin Mail::SpamAssassin::Plugin::Razor2</pre>

