array=($(ls *.py))

echo ""

for var in "${array[@]}"; do
  echo " ---" $var \n
  pylint $var
done
