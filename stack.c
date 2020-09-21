#include <stdio.h>
#include <string.h>

typedef struct Stack {
  int top;
  char data[3][16];
  int maximumSize;
} Stack;

void get(Stack myStack) {
  printf("\n %d [ ", myStack.top);
  for(int i = 0; i < myStack.top; i++) {
    if (myStack.data[i] != "") {
      printf("%s ", myStack.data[i]);
    }
  }
  printf("]\n");
}

Stack push(Stack myStack, char newItem[16]) {
  if (myStack.top < myStack.maximumSize) {
    strcpy(myStack.data[myStack.top], newItem);
    myStack.top = myStack.top + 1;
    get(myStack);
  } else {
    printf("\n Stack (%d) is full, can't add %s\n", myStack.top, newItem);
  }
  return myStack;
}

Stack pop(Stack myStack) {
  if (myStack.top != 0) {
    myStack.top = myStack.top - 1;
    get(myStack);
  }
  return myStack;
}

int main() {

  Stack myStack = { .top = 0, .data = {}, .maximumSize = 3 };

  myStack = push(myStack, "Kevin");

  myStack = push(myStack, "Sally");

  myStack = push(myStack, "David");

  myStack = push(myStack, "Sonya");

  myStack = pop(myStack);

  myStack = push(myStack, "Jessy");

  myStack = push(myStack, "Harry");

  getchar();

  return 0;
}
