#!/bin/bash
cd out
dirs=(_img scripts SpryAssets css)
for dir in "${dirs[@]}"; do
  ln -s "../${dir}" "${dir}"
done
