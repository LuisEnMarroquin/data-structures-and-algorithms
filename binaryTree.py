"""

Given a binary tree, get the average value at each level of the tree

Input:

|     04     |     n1     |
|    /  \    |    /  \    |
|   07  09   |   n2  n3   |
|  /  \  \   |  /  \  \   |
| 10  02  06 | n4  n5  n6 |
|      \     |      \     |
|      06    |      n7    |
|      /     |      /     |
|     02     |     n8     |

Output: [4, 8, 6, 6, 2]

"""

class Node(object):
  def __init__(self, val, left, right):
    self.val = val
    self.left = left
    self.right = right

def _collect(node, data, depth = 0):
  if not node:
    return None

  if depth not in data:
    data[depth] = []

  data[depth].append(node.val)

  _collect(node.left, data, depth + 1)
  _collect(node.right, data, depth + 1)

def avg_by_depth(node):
  data = {}
  _collect(node, data)

  result = []

  i = 0
  while i in data:
    nums = data[i]
    avg = sum(nums) / len(nums)
    result.append(avg)
    i += 1

  return result

n8 = Node(2, False, False)
n7 = Node(6, n8, False)
n6 = Node(6, False, False)
n5 = Node(2, False, n7)
n4 = Node(10, False, False)
n3 = Node(9, n6, False)
n2 = Node(7, n4, n5)
n1 = Node(4, n2, n3)

finalResult = avg_by_depth(n1)

print(finalResult)
