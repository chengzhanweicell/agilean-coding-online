// 实现一个对外提供的工具方法，具备以下功能
// 1. 通过一个一维数组生成一棵树；
// 2. 生成的树支持指定子节点对应的 key，有 children 和 next 两个选择；
// 3. 返回值的类型优好；

const data: Array<{ id: string; name: string; pId?: string }> = [
    { id: '0', name: 'item0', pId: undefined },
    { id: '0_1', name: 'item0_1', pId: '0' },
    { id: '0_2', name: 'item0_2', pId: '0' },
    { id: '0_3', name: 'item0_3', pId: '0' },
    { id: '1', name: 'item1', pId: undefined },
    { id: '1_1', name: 'item1_1', pId: '1' },
    { id: '1_2', name: 'item1_2', pId: '1' },
    { id: '1_3', name: 'item1_3', pId: '1' },
]

// 比如将上面的 data 通过该工具方法，指定 key 为 children，生成对应的树状结构，其返回的数据类型为：
// type TreeNode = { id: string; name: string; children: TreeNode[] }

export {}