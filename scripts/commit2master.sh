mv public /tmp/docunext.com
git co master
rsync -av /tmp/docunext.com/* ./
git st
