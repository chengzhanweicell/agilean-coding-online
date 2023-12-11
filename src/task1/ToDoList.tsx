// 1. 修复存在的问题；
// 2. 优化代码；
// 3. 优化性能；
// 4. 避免不必要的组件 re-render；

import { useState } from 'react';

export const ToDoList = () => {
    const [list, setList] = useState<Array<{ id: number; title: string }>>([]);
    const [input, setInput] = useState('');
    return (
        <div>
            {list.map((it, idx) => (
                <Item
                    key={idx}
                    data={it}
                    onChange={(v) => {
                        list[idx].title = v;
                        setList([...list]);
                    }}
                    onDelete={() => {
                        list.splice(idx, 1);
                        setList([...list]);
                    }}
                />
            ))}
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button
                    onClick={() => {
                        const length = list.length;
                        setInput('');
                        setList(list.concat({ id: length, title: input }));
                    }}
                >
                    添加
                </button>
            </div>
        </div>
    );
};

const Item = ({
    data: { id, title },
    onChange,
    onDelete
}: {
    data: { id: number; title: string };
    onChange: (value: string) => void;
    onDelete: () => void;
}) => {
    // 模拟复杂任务
    doComplexWork(1000);

    return (
        <div>
            <input value={title} onChange={(e) => onChange(e.target.value)} />
            <button onClick={onDelete}>删除</button>
        </div>
    );
};

function doComplexWork(ms: number) {
    const start = new Date().getTime();
    let currentTime = start;

    while (currentTime - start < ms) {
        currentTime = new Date().getTime();
    }
}
