---
title: Make Places
date: 2009-10-10
---
<pre>
#!/bin/bash

sqlite3 -csv .mozilla/firefox/10p23dd5.default/places.sqlite "SELECT url,substr(last_visit_date,0,11) from moz_places WHERE url NOT LIKE 'https%';" > moz_places.csv

cat moz_places.csv | grep google.com/search | sed -r s/.+[?\&]q=/\"/ | sed -r s/\&[^,]+,/\"\ =\>\ / | sed -r s/$/,/ | sed s/+/_/g | tr '[:upper:]' '[:lower:]' | sort | uniq -w 20 > searches.rb

echo 'places = {\n' > newserch.rb
cat searches.rb | grep "=" | grep -e "^\"" >> newserch.rb
echo '\n}' >> newserch.rb
</pre>

