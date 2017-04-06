# Description:

# A nested list is a list that apears as a value inside another list,

# [item, item, [item, item], item]
# in the above list, [item, item] is a nested list.

# Your goal is to write a function that determines the depth of the deepest nested list within a given list.
# return 1 if there are no nested lists. The list passed to your function can contain any data types.

# A few examples:

list_depth([True])
# return 1

list_depth([])
# return 1

list_depth([2, "yes", [True, False]])
# return 2

list_depth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1])
# return 6

list_depth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]])
# return 2

#############################################################

def list_depth(lst, depth = 1): # does not check for non-list input, it throws
    for item in lst:
        if isinstance(item, list):
            return list_depth(item, depth + 1)
    return depth

### variation
def depth(l):
    if isinstance(l, list):
        return 1 + max(depth(item) for item in l)
    else:
        return 0



################works for all input
def list_depth(l):
    if isinstance(l, list):
        if(len(l) == 0):
            depth = 1
        else:
            depth = 1 + max([list_depth(item) for item in l])
    else:
        depth = 0 # if not a list return 0
    return depth




