arrayPY=($(ls *.py))

echo ""

for var in "${arrayPY[@]}"; do
  echo " ---" $var
  pylint $var
done

arrayJS=($(ls *.js))

echo ""

for var in "${arrayJS[@]}"; do
  echo " ---" $var
  standard $var --fix
done
