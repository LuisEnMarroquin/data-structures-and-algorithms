echo ""

arrayJS=($(ls *.js))

for var in "${arrayJS[@]}"; do
  echo " ---" $var
  standard $var --fix
done

echo ""

arrayPY=($(ls *.py))

for var in "${arrayPY[@]}"; do
  echo " ---" $var
  pylint $var
done
