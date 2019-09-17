import React, { useEffect, useState } from 'react';
import { Button } from 'antd';


interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

// const Hello = (props: Greeting) => <Button>{props.name}</Button>

const HelloHooks = (props: Greeting) => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState<string | null>(null);

    useEffect(() => {
        if (count > 5) {
            setText('休息一下')
        }
    }, [count])

    return (
        <>
            <p>你点击了 {count} 次 {text}</p>
            <Button onClick={() => {
                setCount(count + 1)
            }}>Hello {props.name}</Button>
        </>
    )
}

// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
// }) => <Button>{name}</Button>

HelloHooks.defaultProps = {
    firstName: '',
    lastName: ''
}

export default HelloHooks;