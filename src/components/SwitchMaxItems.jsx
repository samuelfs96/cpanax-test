import { Dropdown } from 'flowbite-react'
import React, { useMemo } from 'react'

const SwitchMaxItems = ({
    total,
    maxItems,
    handleMaxItems
}) => {

  const totalItems = useMemo(() => {
    const items = []
    for (let index = 1; index <= total; index++) {
        items.push(index);
    }
    return items
  }, [total])

  return (
    <Dropdown
        label={`Show: ${maxItems}`}
        inline={true}
        className="overflow-auto max-h-60"
    >
        {totalItems.map((item) => (
            <Dropdown.Item key={item} onClick={() => handleMaxItems(item)}>
                {item}
            </Dropdown.Item>
        ))}
    </Dropdown>
  )
}

export default SwitchMaxItems