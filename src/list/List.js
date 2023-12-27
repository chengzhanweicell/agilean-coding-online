// 下面的组件存在问题：当滚动到底部时，点击其中一项，会导致列表滚动回顶部
// 找到原因并修复该问题，可借助互联网

import { useState } from "react";

const List = () => {
  var [data, setData] = useState(
    new Array(150)
      .fill(1)
      .map((_, idx) => ({ id: idx, name: `子项${idx}`, }))
  );

  return (
    <div>
      <div>
        {data.map((it) => (
          <div
            key={it.id}
            onClick={() => {
              const newData = [it, ...data.filter((item) => item !== it)];
              newData.map((item1,index) => {
                item1.id = index;
              });
              setData(newData);
            }}
          >
            {it.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;
