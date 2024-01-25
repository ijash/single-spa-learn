#!/bin/bash

# tested on linux mint 20 cinnamon

# in the current working dir, named `root-config`
gnome-terminal --tab --working-directory=$(pwd)/root-config -- bash -c "yarn start" 

# cd to parent directory
cd ..

# for each directory other than `root-config`, open a new tab and run yarn start
for dir in *; do
  if [ "$dir" != "root-config" ] && [ -d "$dir" ]; then
    gnome-terminal --tab --working-directory=$(pwd)/"$dir" -- bash -c "yarn start"
  fi
done
