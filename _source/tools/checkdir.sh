#/bin/bash

ls tools > /dev/null 2>&1

if [ "$?" == "0" ]; then
  exit 0
else
  exit 1
fi
