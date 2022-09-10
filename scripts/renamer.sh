#!/usr/bin/env bash

content_dir="./src/roadmaps/frontend/content"

for i in {1..5}; do
  for file in $(find $content_dir -name '[0-9]*' -maxdepth "$i"); do
    if [ -e "$file" ]; then
       new_name=$(echo "$file" | sed 's/[0-9]\{3\}-//g')
       # echo "$new_name"
       mv "$file" "$new_name"
    fi
  done
done
