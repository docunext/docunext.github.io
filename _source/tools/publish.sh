#!/bin/bash

./tools/checkdir.sh

if [ "$?" == "0" ]; then
  cp ./build/assets/js/* ../assets/js/
  git commit -m "update assets" ../
fi


