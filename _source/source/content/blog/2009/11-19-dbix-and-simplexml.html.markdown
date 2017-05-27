---
title: DBIx and SimpleXML
date: 2009-11-19
tags: perl
---
I tried this in a Catalyst powered application, using DBIx and SimpleXML:

<pre class="sh_perl">
sub index :Path :Args(0) {
    my ($self, $c) = @_;
    my $i = 0;
    my $transactions = [$c->model('DB::pbgeneralledger')->search({}, {})];
    $c->stash->{template} = 'ledger.xsl';
    $c->stash->{xml} = XMLout($transactions);
    $c->forward( $c->view('XSLT') );
}
</pre>

I got an error I'd never seen before:

<pre class="sh_sh">
circular data structures not supported
</pre>

I found this page about Perl data structures:

* <http://www.perladvent.org/2003/24th/>

Looks like a good read.

